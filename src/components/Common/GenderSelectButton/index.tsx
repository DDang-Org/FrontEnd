import * as S from './styles.ts';
import { Icon } from '~components/Common/Icons';

export interface GenderSelectButtonProps {
  gender: 'male' | 'female';
  direction?: 'row' | 'column';
  isActive: boolean;
  onPress: () => void;
}

export const GenderSelectButton = ({ gender, direction = 'column', isActive, onPress }: GenderSelectButtonProps) => {
  const genderInfo = {
    male: { icon: Icon.Male, text: '남' },
    female: { icon: Icon.Female, text: '여' },
  };

  const { icon: GenderIcon, text } = genderInfo[gender];
  const TextComponent = isActive ? S.StyledTextBold : S.StyledTextRegular;

  return (
    <S.GenderBtn isActive={isActive} direction={direction} onPress={onPress}>
      <GenderIcon color={isActive ? '#462008' : '#505050'} />
      <TextComponent isActive={isActive} fontSize={17}>
        {text}
      </TextComponent>
    </S.GenderBtn>
  );
};
