import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';

export const CreateInviteCode = styled.SafeAreaView``;

export const StyledScrollView = styled.ScrollView`
  padding: 24px 20px 36px 20px;
`;

export const Title = styled(TextBold)`
  margin-bottom: 8px;
`;

export const TextArea = styled.View`
  width: 100%;
  height: 238px;
  position: relative;
`;

export const DogImage = styled(Icon.DogInvite)`
  position: absolute;
  right: 12px;
  bottom: 0;
`;

export const CopyInviteCode = styled.Pressable`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background-color: #ecf9da;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TimerWrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
  gap: 10px;
  justify-content: center;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: #e5e5ec;
  margin-top: 40px;
`;
