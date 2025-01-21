import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles.ts';

interface GenderSelectButtonProps {
  gender: 'male' | 'female';
  direction?: 'row' | 'column';
  isActive: boolean;
  onPress: () => void;
}

export const GenderSelectButton = ({ gender, direction = 'column', isActive, onPress }: GenderSelectButtonProps) => {
  return (
    <S.GenderBtn $isActive={isActive} $direction={direction} onPress={onPress}>
      <S.GenderIcon />
      {isActive ? (
        <TextBold fontSize={17}>{gender === 'male' ? '남' : '여'}</TextBold>
      ) : (
        <TextRegular fontSize={17}>{gender === 'male' ? '남' : '여'}</TextRegular>
      )}
    </S.GenderBtn>
  );
};
