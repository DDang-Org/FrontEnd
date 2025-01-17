import styled from '@emotion/native';
import { Modal } from 'react-native';
import { DogProfile } from '~components/Walk/DogProfile';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

type ModalType =
  | 'walkStart' // 산책 시작 전 입력
  | 'walkJoin' // 산책 참여 요청
  | 'walkCancel' // 산책 취소
  | 'report' // 신고하기
  | 'reportComplete' // 신고 완료
  | 'walkComplete'; // 산책 완료

interface CommonModalProps {
  isVisible: boolean;
  onClose: () => void;
  type: ModalType;
  message?: string;
  reportOptions?: { label: string; value: string }[];
  data?: {
    dog?: {
      id: string;
      name: string;
      breed: string;
      age: string;
      gender: string;
      imageUrl: string;
    };
    walkCount?: number;
  };
  onSubmit?: (value?: string) => void;
  onCancel?: () => void;
}

const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  position: relative;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 80%;
  align-items: center;
`;

const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

const ReportButton = styled.Text`
  position: absolute;
  right: 0;
  top: 0;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #f5f5f5;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.TouchableOpacity<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 8px;
  flex: 1;
  background-color: ${props => (props.variant === 'primary' ? '#8B4513' : '#F5F5F5')};
`;

const ButtonText = styled.Text<{ variant?: 'primary' | 'secondary' }>`
  color: ${props => (props.variant === 'primary' ? 'white' : 'black')};
  text-align: center;
  font-size: 14px;
`;

const Message = styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
`;

export const CommonModal = ({
  isVisible,
  onClose,
  type,
  data,
  message,
  reportOptions,
  onSubmit,
  onCancel,
}: CommonModalProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const getModalContent = () => {
    switch (type) {
      case 'walkStart':
        return {
          content: (
            <Input
              placeholder="산책하기 위해 멘트를 입력하세요"
              onSubmitEditing={e => onSubmit?.(e.nativeEvent.text)}
            />
          ),
          dog: data?.dog,
          buttons: [{ text: '전송하기', onPress: () => onSubmit?.(), variant: 'primary' }],
        };

      case 'walkJoin':
        return {
          title: '산책 요청이 왔어요!',
          dog: data?.dog,
          content: <Message>{message}</Message>,
          buttons: [
            { text: '거절', onPress: onCancel },
            { text: '수락', onPress: () => onSubmit?.(), variant: 'primary' },
          ],
        };

      case 'walkCancel':
        return {
          title: '강번따 응답',
          content: <Message>{data?.dog?.name}이(가) 거절했어요.</Message>,
          buttons: [
            { text: '취소', onPress: onCancel },
            { text: '다시 시도', onPress: () => onSubmit?.(), variant: 'primary' },
          ],
        };

      case 'report':
        return {
          title: '어떤 이유로 신고하시나요?',
          content: (
            <DropDownPicker
              placeholder="신고 타입 선택"
              open={open}
              value={value}
              items={reportOptions ?? []}
              setOpen={setOpen}
              setValue={setValue}
              // setItems={setItems}
            />
          ),
          buttons: [
            { text: '취소', onPress: onCancel },
            { text: '전달', onPress: () => onSubmit?.(), variant: 'primary' },
          ],
        };

      case 'reportComplete':
        return {
          title: '신고 완료!',
          content: <Message>신고가 완료되었습니다.</Message>,
          buttons: [{ text: '확인', onPress: onClose, variant: 'primary' }],
        };

      case 'walkComplete':
        return {
          title: '산책 친구하실래요?',
          dog: data?.dog,
          buttons: [
            { text: '괜찮아요', onPress: onCancel },
            { text: '친구 요청', onPress: () => onSubmit?.(), variant: 'primary' },
          ],
        };
    }
  };

  const modalContent = getModalContent();

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose} animationType="fade">
      <ModalBackground activeOpacity={1} onPress={onClose}>
        <ModalContainer>
          <TitleContainer>
            {modalContent?.title && <Title>{modalContent?.title}</Title>}
            {type === 'walkComplete' && <ReportButton>신고</ReportButton>}
          </TitleContainer>
          {modalContent?.dog && <DogProfile dog={modalContent.dog} />}
          {modalContent?.content}
          <ButtonContainer>
            {modalContent?.buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant as 'primary' | 'secondary' | undefined}
                onPress={button.onPress}
              >
                <ButtonText variant={button.variant as 'primary' | 'secondary' | undefined}>{button.text}</ButtonText>
              </Button>
            ))}
          </ButtonContainer>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};
