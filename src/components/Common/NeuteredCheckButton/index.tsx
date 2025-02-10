import { Icon } from '~components/Common/Icons';
import * as S from './styles';
import { TextRegular } from '~components/Common/Text';

interface NeuteredCheckButtonProps {
  onPress: () => void;
  isNeutered: 'TRUE' | 'FALSE';
}

export const NeuteredCheckButton = ({ onPress, isNeutered }: NeuteredCheckButtonProps) => {
  return (
    <S.NeuteredCheckButton onPress={onPress}>
      {isNeutered === 'TRUE' ? <Icon.NeuteredCheck /> : <S.NotChecked />}
      <TextRegular fontSize={17} color={isNeutered === 'TRUE' ? 'font_1' : 'font_3'}>
        중성화했어요
      </TextRegular>
    </S.NeuteredCheckButton>
  );
};
