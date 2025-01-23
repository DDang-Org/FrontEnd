import styled from '@emotion/native';
import { TextRegular } from '~components/Common/Text';

export const RegisterDog = styled.SafeAreaView`
  padding: 0 20px;
  border: solid 1px red;
  flex: 1;
`;

export const TextWrapper = styled.View`
  padding: 0 20px;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.View`
  padding: 0 20px;
  gap: 12px;
`;

export const NavigateBtn = styled.Pressable`
  padding: 20px 24px;
  height: 160px;
  border-radius: 16px;
  border: solid 1px ${props => props.theme.colors.gc_1};
`;

export const Description = styled(TextRegular)`
  color: ${props => props.theme.colors.font_3};
`;
