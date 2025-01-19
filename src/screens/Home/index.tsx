import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Avatar1 from '~assets/avatars/Avatar1.svg';
import DogHand from '~assets/dogs/dog-hand.svg';
import { ActionButton } from '~components/Common/ActionButton';
import { Icon } from '~components/Common/Icons';
import { WalkInfo } from '~components/Home/WalkInfo';
import { HomeStackProps } from '~navigation/HomeNavigator';
import * as S from './styles';
import { Suspense } from 'react';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <S.HomeScreen>
      <S.Header>
        {/* Profile로 변경하기 */}
        <Avatar1 width={32} height={32} />
        <Icon.Bell onPress={() => navigation.navigate('Notification')} />
      </S.Header>
      <S.Heading>
        <S.HeadingText fontSize={24}>오늘은 아빠랑</S.HeadingText>
        <S.HeadingText fontSize={24}>산책가는 날!</S.HeadingText>
      </S.Heading>
      <DogHand />
      <Suspense fallback={<Text>Loading...</Text>}>
        <WalkInfo />
      </Suspense>
      <ActionButton type="semiRoundedRect" text="산책 시작하기" onPress={() => navigation.navigate('Walk')} />
    </S.HomeScreen>
  );
};
