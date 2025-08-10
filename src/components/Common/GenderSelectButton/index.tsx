import { Gender } from '~types/gender';
import * as S from './styles.ts';
import { Icon } from '~components/Common/Icons';

export interface GenderSelectButtonProps {
  gender: Gender;
  direction?: 'row' | 'column';
  isActive: boolean;
  onPress: () => void;
}

export const GenderSelectButton = ({ gender, direction = 'column', isActive, onPress }: GenderSelectButtonProps) => {
  const genderInfo = {
    MALE: { icon: Icon.Male, text: '남' , color: '#6586FF'},
    FEMALE: { icon: Icon.Female, text: '여' , color: '#FF7575'},
  };

  const { icon: GenderIcon, text, color } = genderInfo[gender];
  const TextComponent = isActive ? S.StyledTextBold : S.StyledTextRegular;

  return (
    <S.GenderBtn isActive={isActive} direction={direction} onPress={onPress}>
      <GenderIcon color={isActive ?  color : '#E5e5ec'} />
      <TextComponent isActive={isActive} fontSize={17}>
        {text}
      </TextComponent>
    </S.GenderBtn>
  );
};
