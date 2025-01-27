import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActionButton } from '~components/Common/ActionButton';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { Icon } from '~components/Common/Icons';

// 최상위 네비게이터의 타입 정의
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterDog'>;

export function RegisterOwnerProfile() {
  // useNavigation을 사용해 최상위 네비게이터와 연결
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <S.RegisterOwner>
        <S.AddAvatarBtn onPress={()=>
        navigation.navigate('RegisterOwner', {screen: 'OwnerAvatarModal'})}>
        <Icon.AddDogPicture />
        </S.AddAvatarBtn>
      {/* 버튼 클릭 시 최상위 네비게이터의 'RegisterDog' 경로로 이동 */}
      <ActionButton
        onPress={() =>
            navigation.navigate('RegisterDog', {
                screen: RegisterDogNavigations.HOME,
              })//중첩 네비게이터 호출 방식
        }
        text="다음~!"
      />
    </S.RegisterOwner>
  );
}
