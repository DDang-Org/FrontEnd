import { Modal } from 'react-native';
import { DogProfile } from '~components/Walk/DogProfile';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import * as S from './styles';
import { Icon } from '~components/Common/Icons';

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

export const WalkModal = ({
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
  const [_items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
  ]);

  const getModalContent = () => {
    switch (type) {
      case 'walkStart':
        return {
          content: (
            <S.Input
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
          content: (
            <S.MessageContainer>
              <S.Message fontSize={13}>{message}</S.Message>
            </S.MessageContainer>
          ),
          buttons: [
            { text: '거절', onPress: onCancel },
            { text: '수락', onPress: () => onSubmit?.(), variant: 'primary' },
          ],
        };

      case 'walkCancel':
        return {
          title: '강번따 응답',
          content: <S.Message fontSize={17}>{data?.dog?.name}이(가) 거절했어요.</S.Message>,
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
              setItems={setItems}
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
          content: <S.Message fontSize={17}>신고가 완료되었습니다.</S.Message>,
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
      <S.ModalBackground activeOpacity={1} onPress={onClose}>
        <S.ModalContainer>
          <S.TitleContainer>
            {modalContent?.title && <S.Title fontSize={14}>{modalContent?.title}</S.Title>}
            {type === 'walkComplete' && <Icon.Report style={{ position: 'absolute', right: 0, top: 0 }} />}
          </S.TitleContainer>
          {modalContent?.dog && <DogProfile dog={modalContent.dog} />}
          {modalContent?.content}
          <S.ButtonContainer type={type}>
            {modalContent?.buttons.map((button, index) => (
              <S.ModalButton
                key={index}
                text={button.text}
                onPress={button.onPress}
                type="roundedRect"
                bgColor={button.variant === 'primary' ? 'default' : 'lighten_3'}
              />
            ))}
          </S.ButtonContainer>
        </S.ModalContainer>
      </S.ModalBackground>
    </Modal>
  );
};
