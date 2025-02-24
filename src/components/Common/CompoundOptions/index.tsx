import { PropsWithChildren, ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';
import { Animated, GestureResponderEvent, Modal, ModalProps, PressableProps, StyleSheet } from 'react-native';
import * as S from './styles';

interface OptionContextValue {
  onClickOutSide?: (event: GestureResponderEvent) => void;
  isVisible: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionContext = createContext<OptionContextValue | undefined>(undefined);

interface OptionMainProps extends ModalProps {
  children: ReactNode;
  isVisible: boolean;
  hideOption: () => void;
}

const OptionMain = ({ children, isVisible, hideOption, ...props }: OptionMainProps) => {
  const [showModal, setShowModal] = useState(isVisible);
  const onClickOutSide = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      hideOption();
    }
  };
  useEffect(() => {
    if (isVisible) {
      setShowModal(true);
    }
  }, [isVisible]);

  return (
    <Modal visible={showModal} transparent={true} onRequestClose={hideOption} {...props}>
      <OptionContext.Provider value={{ onClickOutSide, isVisible, setShowModal }}>{children}</OptionContext.Provider>
    </Modal>
  );
};

const Background = ({ children }: PropsWithChildren) => {
  const optionContext = useContext(OptionContext);

  return <S.OptionBackground onTouchEnd={optionContext?.onClickOutSide}>{children}</S.OptionBackground>;
};

const Container = ({ children }: PropsWithChildren) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  const optionContext = useContext(OptionContext);
  if (!optionContext) throw new Error('Container must be used within an OptionMain');

  const { isVisible, setShowModal } = optionContext;

  useEffect(() => {
    if (isVisible) {
      setShowModal(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 600,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowModal(false));
    }
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.optionContainer,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

interface ButtonProps extends PressableProps {
  children: ReactNode;
  isDanger?: boolean;
}

const Button = ({ children, isDanger = false, ...props }: ButtonProps) => {
  return (
    <S.OptionButton {...props}>
      <S.OptionText fontSize={17} isDanger={isDanger}>
        {children}
      </S.OptionText>
    </S.OptionButton>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <S.TitleContainer>
      <S.TitleText fontSize={15}>{children}</S.TitleText>
    </S.TitleContainer>
  );
};

const Divider = () => {
  return <S.Divider />;
};

export const CompoundOption = Object.assign(OptionMain, {
  Container,
  Background,
  Button,
  Title,
  Divider,
});

const styles = StyleSheet.create({
  optionContainer: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
