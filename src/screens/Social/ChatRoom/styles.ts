import styled from '@emotion/native';
import { Theme } from '@emotion/react';
import { Platform, TextInput } from 'react-native';
import { TextBold, TextMedium } from '~components/Common/Text';

export const Talk = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gc_4};
`;
export const LeftContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TypoWrapper = styled.View`
  margin-left: 12px;
`;
export const Name = styled(TextBold)``;
export const GenderFamilyRoleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const Gender = styled(TextMedium)``;
export const FamilyRole = styled(TextMedium)``;
export const TalkInputWrapper = styled.View`
  width: 100%;
  height: 64px;
  padding: 12px 20px;
  padding-top: ${Platform.OS === 'ios' ? 4 + 'px' : 12 + 'px'};
  background-color: ${({ theme }) => theme.colors.gc_4};
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

interface TextProps {
  fontSize: 9 | 11 | 13 | 14 | 15 | 17 | 20 | 24 | 28;
  color?: keyof Theme['colors'];
}
export const TalkInput = styled(TextInput)<TextProps>`
  flex: 1;
  font-family: 'SUIT-Medium';
  font-size: ${({ fontSize }) => fontSize + 'px'};
  color: ${({ theme, color = 'font_1' }) => theme.colors[color]};
  line-height: ${({ fontSize }) => fontSize * 1.5 + 'px'};
  letter-spacing: ${({ fontSize }) => fontSize * -0.025 + 'px'};
`;

export const MessageSendButtonWrapper = styled.View`
  width: 57px;
  height: 64px;
  justify-content: center;
  align-items: center;
  transform: translateY(${Platform.OS === 'ios' ? 4 + 'px' : 0 + 'px'});
`;

export const MessageSendButton = styled.Pressable`
  width: 57px;
  height: 40px;
  background-color: ${props => props.theme.colors.lighten_2};
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;
