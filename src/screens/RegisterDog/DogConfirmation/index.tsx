import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { Dimensions } from 'react-native';
import { TextBold } from '~components/Common/Text';
import { Tag } from '~components/RegisterDog/Tag';

interface DogConfirmationProps {}

export const DogConfirmation = ({}: DogConfirmationProps) => {
  const deviceHeight = Dimensions.get('screen').height;
  return (
    <S.DogConfirmation>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>이 반려견이</TextBold>
        <TextBold fontSize={24}>맞나요?</TextBold>
      </S.TextWrapper>
      <S.DogProfileArea>
        <S.DogImage source={{ uri: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg' }} />
        <S.TagWrapper>
          <Tag content="밤톨" />
          <Tag content="토이푸들" />
          <Tag content="2살" />
        </S.TagWrapper>
      </S.DogProfileArea>
      <ActionButton onPress={() => null} text="확인" />
    </S.DogConfirmation>
  );
};
