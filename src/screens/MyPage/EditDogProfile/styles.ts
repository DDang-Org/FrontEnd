import styled from '@emotion/native';
import { Platform } from 'react-native';
import { TextBold } from '~components/Common/Text';

export const EditDogProfile = styled.SafeAreaView`
  flex: 1;
`;

export const StyledScrollView = styled.ScrollView`
  padding: 0px 20px 36px 20px;
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  margin-top: ${props => (props.deviceHeight > 900 ? '70px' : '50px')};
  margin-bottom: 20px;
  align-items: center;
`;

export const ImageArea = styled.View`
  align-items: center;
  gap: 12px;
`;

export const SelectedImageField = styled.View`
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

export const ImagePreviewer = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 180px;
`;

export const AddImageButton = styled.Pressable`
  width: 75px;
  height: 32px;
  border-radius: 22px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
`;

export const GenderSelectArea = styled.View`
  gap: 20px;
`;

export const GenderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 7px;
`;

export const ActionButtonWrapper = styled.View`
  width: 100%;
`;

export const DeleteButton = styled.Pressable`
  margin-bottom: ${Platform.OS === 'android' ? '40px' : '20px'};
`;

export const DeleteButtonText = styled(TextBold)`
  color: gray;
`;
