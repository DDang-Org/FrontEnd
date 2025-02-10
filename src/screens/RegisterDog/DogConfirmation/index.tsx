import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { Dimensions, View } from 'react-native';
import { TextBold } from '~components/Common/Text';
import { Tag } from '~components/RegisterDog/Tag';
import { RouteProp } from '@react-navigation/native';
import { FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
import { getAge } from '~utils/getAge';
import { useJoinFamily } from '~apis/family/useInviteCode';
import { HTTPError } from 'ky';
import { useRef } from 'react';
import { useToast } from '~hooks/useToast';

type DogConfirmationRouteProps = RouteProp<
  {
    DogConfirmation: {
      inviteCode: string;
      dogInfos: FetchMyDogInfoResponseType;
    };
  },
  'DogConfirmation'
>;

export const DogConfirmation = ({ route }: { route: DogConfirmationRouteProps }) => {
  const confirmButtonRef = useRef<View | null>(null);
  const deviceHeight = Dimensions.get('screen').height;
  const { inviteCode, dogInfos } = route.params;
  const joinFamilyMutation = useJoinFamily();
  const { showFormErrorToast } = useToast();

  const targetDog = dogInfos[0];

  const handleConfirm = () => {
    joinFamilyMutation.mutate(inviteCode, {
      onSuccess: () => console.log('이제 홈으로 이동'),
      onError: async error => {
        if (error instanceof HTTPError) {
          try {
            const errorData = await error.response.json();
            const message = errorData.message;
            showFormErrorToast(message, confirmButtonRef);
          } catch (parseError) {
            console.error('Failed to parse error response:', parseError);
          }
        } else {
          console.error('Unexpected Error:', error);
        }
      },
    });
  };

  return (
    <S.DogConfirmation>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>이 반려견이</TextBold>
        <TextBold fontSize={24}>맞나요?</TextBold>
      </S.TextWrapper>
      <S.DogProfileArea>
        <S.DogImage source={{ uri: targetDog.dogProfileImg }} />
        <S.TagWrapper>
          <Tag content={targetDog.dogName} />
          <Tag content={targetDog.breed} />
          <Tag content={`${getAge(targetDog.dogBirthDate).toString()}살`} />
        </S.TagWrapper>
      </S.DogProfileArea>
      <View ref={confirmButtonRef} style={{ width: '100%' }}>
        <ActionButton onPress={handleConfirm} text="확인" />
      </View>
    </S.DogConfirmation>
  );
};
