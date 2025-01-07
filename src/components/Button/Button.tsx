import styled, { css } from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';

const Container = styled.TouchableOpacity`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.default};
  border-radius: 8px;
`;

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <Text
        style={css`
          color: white;
        `}
      >
        {text}
      </Text>
    </Container>
  );
};
