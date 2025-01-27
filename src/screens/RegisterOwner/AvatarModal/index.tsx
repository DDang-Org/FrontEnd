import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterOwnerParamList } from '~navigation/Auth/RegisterOwnerNavigator';
import { Icon } from '~components/Common/Icons';

type RegisterOwnerProps = NativeStackScreenProps<RegisterOwnerParamList, 'OwnerAvatarModal'>;

export const OwnerAvatarModal = ({ navigation }: RegisterOwnerProps) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        {/* 닫기 버튼 */}
        <S.CloseButton onPress={() => navigation.goBack()}>
          <Icon.Close />
        </S.CloseButton>

        {/* 모달 내용 */}
        <S.Text>모달입니다모달입니다모달입니다다모달입니다모달입니다다모달입니다모달입니다다모달입니다모달입니다다모달입니다모달입니다다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다모달입니다.</S.Text>
      </S.ModalContent>
    </S.ModalContainer>
  );
};
