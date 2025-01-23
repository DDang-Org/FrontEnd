import styled from '@emotion/native';
import { Platform } from 'react-native';
import { TextRegular } from '~components/Common/Text';

export const RegisterDog = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;

export const OptionBtn = styled.Pressable`
  position: absolute;
  right: 14px;
  top: ${Platform.OS === 'ios' ? '84px' : '24px'};
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  padding: 0 20px;
  margin-top: ${props => (props.deviceHeight > 900 ? '100px' : '80px')};
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.View`
  padding: 0 20px;
  gap: 12px;
`;

export const NavigateBtn = styled.Pressable`
  gap: 4px;
  padding: 20px 24px;
  height: 160px;
  border-radius: 16px;
  border: solid 1px ${props => props.theme.colors.gc_1};
`;

export const Description = styled(TextRegular)`
  color: ${props => props.theme.colors.font_3};
`;

export const IconWrapper = styled.View`
  align-self: flex-end;
`;
