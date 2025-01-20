import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DescriptionWithTimeStamp } from '~components/Common/DescriptionWithTimeStamp';
import { MyPageStackProps } from '~navigation/MyPageNavigator';
import * as S from './styles';

type Props = NativeStackScreenProps<MyPageStackProps, 'Entry'>;

export const EntryScreen = ({ navigation }: Props) => {
  return (
    <S.EntryScreen>
      <DescriptionWithTimeStamp
        onPress={() => navigation.navigate('Setting')}
        description="알림 설정 및 로그아웃"
        time="알림과 로그인 상태를 결정해요"
      />
      <DescriptionWithTimeStamp
        onPress={() => navigation.navigate('Block')}
        description="차단 목록"
        time="차단한 유저를 관리해요"
      />
    </S.EntryScreen>
  );
};
