import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/Auth/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';

type BasicProfileProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.BASIC_PROFILE>;

export const BasicProfile = ({ navigation }: BasicProfileProps) => {
  return (
    <S.BasicProfile>
      <ActionButton
        onPress={() => navigation.navigate(RegisterDogNavigations.DETAIL_PROFILE, { basicInfo: null })}
        text="다음"
      />
    </S.BasicProfile>
  );
};
