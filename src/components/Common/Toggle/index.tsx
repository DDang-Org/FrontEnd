import React from 'react';
import { Switch } from 'react-native';
import * as S from './styles';
import { useTheme } from '@emotion/react';

interface ToggleProps {
  value: boolean; 
  onValueChange: (value: boolean) => void; 
  disabled?: boolean; 
  label?: string; 
}

export const Toggle = ({
    value,
    onValueChange,
    disabled = false,
    label,
}: ToggleProps) => {
  const theme = useTheme(); 
    return (
        <S.Container>
        {label && <S.Label>{label}</S.Label>}
        <Switch
            value={value}
            onValueChange={onValueChange}
            disabled={disabled}
            trackColor={{
            false: theme.colors.gc_1, 
            true: theme.colors.font_1, 
            }}
            thumbColor={theme.colors.gc_4}
            ios_backgroundColor={theme.colors.gc_1}
        />
        </S.Container>
    );
};

