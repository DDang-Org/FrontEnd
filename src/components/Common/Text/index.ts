import styled from '@emotion/native';

const Text = styled.Text<{ fontSize: 11 | 13 | 14 | 15 | 17 | 20 | 24 }>`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  color: ${({ theme }) => theme.colors.font_1};
  line-height: ${({ fontSize }) => fontSize * 1.5 + 'px'};
  letter-spacing: ${({ fontSize }) => fontSize * -0.025 + 'px'};
`;

export const TextThin = styled(Text)`
  font-family: 'SUIT-Thin';
`;

export const TextExtraLight = styled(Text)`
  font-family: 'SUIT-ExtraLight';
`;

export const TextLight = styled(Text)`
  font-family: 'SUIT-Light';
`;

export const TextRegular = styled(Text)`
  font-family: 'SUIT-Regular';
`;

export const TextMedium = styled(Text)`
  font-family: 'SUIT-Medium';
`;

export const TextSemiBold = styled(Text)`
  font-family: 'SUIT-SemiBold';
`;

export const TextBold = styled(Text)`
  font-family: 'SUIT-Bold';
`;

export const TextExtraBold = styled(Text)`
  font-family: 'SUIT-ExtraBold';
`;

export const TextHeavy = styled(Text)`
  font-family: 'SUIT-Heavy';
`;
