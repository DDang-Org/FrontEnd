import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';

type DetailProfileProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.DETAIL_PROFILE>;

export const DetailProfile = ({}: DetailProfileProps) => {
  return (
    <S.DetailProfile>
      <ActionButton onPress={() => null} text="확인" />
    </S.DetailProfile>
  );
};
