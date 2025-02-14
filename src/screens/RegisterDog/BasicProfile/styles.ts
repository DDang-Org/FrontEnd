import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const BasicProfile = styled.View`
  padding: 0px 20px 78px 20px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  margin-top: ${props => (props.deviceHeight > 900 ? '36px' : '24px')};
  align-items: center;
`;

export const AddImageButton = styled.Pressable`
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 180px;
  border-radius: 180px;
  background-color: ${props => props.theme.colors.lighten_2};
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const AddImageText = styled(TextBold)`
  color: ${props => props.theme.colors.darken};
`;

export const ImagePreviewer = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50px;
`;

export const InputArea = styled.View`
  width: 100%;
`;

export const ActionButtonWrapper = styled.View`
  width: 100%;
`;
