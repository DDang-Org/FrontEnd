import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';

interface DogConfirmationProps {}

export const DogConfirmation = ({}: DogConfirmationProps) => {
  return (
    <S.DogConfirmation>
      <ActionButton onPress={() => null} text="확인" />
    </S.DogConfirmation>
  );
};
