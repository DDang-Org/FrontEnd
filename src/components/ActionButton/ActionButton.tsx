import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { Theme, useTheme } from '@emotion/react';

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
  fontWeight?: keyof Theme['fontWeights'];
  disabled?: boolean;
  onPress?: () => void;
  text: string;
};

const ACTION_BUTTON_STYLES: Record<Required<ActionButtonProps>['type'], ViewStyle> = {
  roundedRect: {
    padding: 15.5,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  semiRoundedRect: {
    padding: 16.5,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  capsule: {
    padding: 18,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
};

export default function ActionButton({
  bgColor = 'default',
  type = 'capsule',
  fontWeight = 'regular',
  disabled = false,
  onPress,
  text,
}: ActionButtonProps) {
  const theme = useTheme();
  const buttonStyle: ViewStyle = {
    width: '100%',
    backgroundColor: disabled ? theme.colors.lighten_3 : theme.colors[bgColor],
    ...ACTION_BUTTON_STYLES[type],
  };

  const textStyle: TextStyle = {
    color: disabled ? theme.colors.font_2 : theme.colors[ACTION_BUTTON_FONT_COLORS[bgColor]],
    fontWeight: theme.fontWeights[fontWeight],
    textAlign: 'center',
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.9}
      testID="action-button"
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
