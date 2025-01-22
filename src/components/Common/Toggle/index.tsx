import React from 'react';
import { Switch } from 'react-native';
import * as S from './styles';
import { useTheme } from '@emotion/react';

interface ToggleProps {
  value: boolean; // 스위치 상태
  onValueChange: (value: boolean) => void; // 상태 변경 핸들러
  disabled?: boolean; // 비활성화 여부
  label?: string; // 스위치 옆에 표시할 텍스트 라벨
}

export const Toggle: React.FC<ToggleProps> = ({
    value,
    onValueChange,
    disabled = false,
    label,
}) => {
  const theme = useTheme(); // 테마 객체 가져오기

    return (
        <S.Container>
        {label && <S.Label>{label}</S.Label>}
        <Switch
            value={value}
            onValueChange={onValueChange}
            disabled={disabled}
            trackColor={{
            false: theme.colors.gc_1, // 비활성화 상태 트랙 색상
            true: theme.colors.font_1, // 활성화 상태 트랙 색상
            }}
            ios_backgroundColor={theme.colors.gc_1} // iOS 백그라운드 색상
        />
        </S.Container>
    );
};

