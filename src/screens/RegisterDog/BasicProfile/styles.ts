import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const BasicProfile = styled.View`
  padding: 0px 20px 36px 20px;
  flex: 1;
  align-items: center;
  gap: 30px;
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  margin-top: ${props => (props.deviceHeight > 900 ? '100px' : '80px')};
  align-items: center;
`;

export const AddImageArea = styled.View``;

export const AddImageButton = styled.Pressable`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lighten_2};
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const AddImageText = styled(TextBold)`
  color: ${props => props.theme.colors.darken};
`;

export const InputArea = styled.View`
  width: 100%;
`;
