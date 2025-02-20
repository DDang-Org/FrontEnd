import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { Dimensions, View } from 'react-native';
import { TextBold } from '~components/Common/Text';
import { Tag } from '~components/RegisterDog/Tag';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
import { getAge } from '~utils/getAge';
import { useJoinFamily } from '~apis/family/useInviteCode';
import { HTTPError } from 'ky';
import { useRef } from 'react';
import { useToast } from '~hooks/useToast';
import { useThrottle } from '~hooks/useThrottle';
import { useAuth } from '~apis/member/useAuth';
import { RootStackNavigationProp } from '~navigation/RootNavigator';

type DogConfirmationRouteProps = RouteProp<
  {
    DogConfirmation: {
      inviteCode: string;
      dogInfos: FetchMyDogInfoResponseType[];
    };
  },
  'DogConfirmation'
>;

export const DogConfirmation = ({ route }: { route: DogConfirmationRouteProps }) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const confirmButtonRef = useRef<View | null>(null);
  const deviceHeight = Dimensions.get('screen').height;
  const { inviteCode, dogInfos } = route.params;
  const joinFamilyMutation = useJoinFamily();
  const { showFormErrorToast } = useToast();
  const throttle = useThrottle(1000);
  const { hasDog } = useAuth();

  const targetDog = dogInfos[0];

  const handleConfirm = () => {
    joinFamilyMutation.mutate(inviteCode, {
      onSuccess: () => {
        if (hasDog) {
          navigation.goBack();
          setTimeout(() => navigation.goBack(), 0);
          return;
        }
      },
      onError: async error => {
        if (error instanceof HTTPError) {
          const errorData = await error.response.json();
          const message = errorData.message;
          showFormErrorToast(message, confirmButtonRef);
        }
        console.error(error);
      },
    });
  };

  const throttleHandleConfirm = throttle(handleConfirm);
  const characterCount = targetDog.dogName.length + targetDog.breed.length;

  return (
    <S.DogConfirmation>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>이 반려견이</TextBold>
        <TextBold fontSize={24}>맞나요?</TextBold>
      </S.TextWrapper>
      <S.DogProfileArea characterCount={characterCount}>
        <S.DogImage source={{ uri: targetDog.dogProfileImg }} />
        <S.TagWrapper characterCount={characterCount}>
          <Tag content={targetDog.dogName} />
          <Tag content={targetDog.breed} />
          <Tag content={`${getAge(targetDog.dogBirthDate).toString()}살`} />
        </S.TagWrapper>
      </S.DogProfileArea>
      <View ref={confirmButtonRef} style={{ width: '100%' }}>
        <ActionButton onPress={throttleHandleConfirm} text="확인" />
      </View>
    </S.DogConfirmation>
  );
};
