import { Theme, useTheme } from '@emotion/react';
import * as S from './styles';

const ACTION_BUTTON_FONT_COLORS = {
  default: 'gc_4',
  lighten_2: 'font_1',
  lighten_3: 'font_1',
  font_1: 'gc_4',
  gc_4: 'font_1',
  gc_1: 'font_4',
} as const;

type BgColorType = Extract<keyof Theme['colors'], 'default' | 'lighten_2' | 'lighten_3' | 'gc_4' | 'gc_1' | 'font_1'>;

type ActionButtonProps = {
  bgColor?: BgColorType;
  type?: 'roundedRect' | 'semiRoundedRect' | 'capsule';
  disabled?: boolean;
  onPress?: () => void;
  text: string;
};

const ACTION_BUTTON_STYLES = {
  roundedRect: {
    padding: '15.5px 24px',
    borderRadius: '12px',
  },
  semiRoundedRect: {
    padding: '16.5px 24px',
    borderRadius: '12px',
  },
  capsule: {
    padding: '18px 24px',
    borderRadius: '100px',
  },
};

export const ActionButton = ({
  bgColor = 'default',
  type = 'capsule',
  disabled = false,
  onPress,
  text,
}: ActionButtonProps) => {
  const theme = useTheme();
  const buttonStyle = {
    bgColor: disabled ? theme.colors.gc_1 : theme.colors[bgColor],
    ...ACTION_BUTTON_STYLES[type],
  };

  return (
    <S.ActionButton onPress={onPress} disabled={disabled} testID="action-button" {...buttonStyle}>
      <S.Text fontSize={17} color={disabled ? theme.colors.font_4 : theme.colors[ACTION_BUTTON_FONT_COLORS[bgColor]]}>
        {text}
      </S.Text>
    </S.ActionButton>
  );
};
