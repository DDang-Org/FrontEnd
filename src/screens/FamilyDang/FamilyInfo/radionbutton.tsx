import * as S from '../styles';

export const RadioButton = ({ isSelected, onPress }: { isSelected: boolean; onPress: () => void }) => {
  return <S.RadioButtonWrapper onPress={onPress}>{isSelected && <S.RadioButtonInner />}</S.RadioButtonWrapper>;
};
