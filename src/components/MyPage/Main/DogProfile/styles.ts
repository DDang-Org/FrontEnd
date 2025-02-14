import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold, TextMedium } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';
interface IconProps {
  expanded: boolean;
}

export const DogProfile = styled(BgBox)<{ expanded: boolean }>`
  min-height: 80px;
  height: ${({ expanded }) => (expanded ? 'auto' : '108px')}; // 확장 여부에 따라 높이 조정
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 10px;
  padding-top: -10px;
`;

export const FirstDogProfile = styled.View`
  flex-direction: row;
  min-height: 108px;
  overflow: hidden;
  flex: 1;
  gap: 20px;
  align-items: center;
`;
export const Info = styled.View`
  flex: 1;
`;
export const StyledIcon = styled(Icon.Prev)<IconProps>`
  width: 16px;
  height: 16px;
  padding-right: 35px;
  transform: ${({ expanded }) => (expanded ? 'rotate(270deg)' : 'rotate(180deg)')}; // 상태에 따라 회전
`;
export const Heading = styled.View`
  flex-direction: row;
  gap: 3px;
`;

export const EditOtherButton = styled.Pressable`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
`;
export const Name = styled(TextBold)``;
export const Breed = styled(TextMedium)``;
export const Age = styled(TextMedium)``;
export const Gender = styled(TextMedium)``;
export const IsNeutered = styled(TextMedium)``;
export const Weight = styled(TextMedium)``;
export const Comment = styled(TextMedium)`
  margin-top: 4px;
`;
export const EditButton = styled(Pressable)`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  border-radius: 10px;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const OtherDogWrapper = styled.View`
  flex-direction: column;
  min-height: 108px;
  min-width: 300px;
  gap: 10px;
`;

export const OtherDogProfile = styled.View`
  flex-direction: row;
  margin: 7px 0;
  gap: 15px;
`;
export const Line = styled.View`
  align-items: center;
  padding-bottom: 14px;
  margin-top: -28px;
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

//! Loader
export const DogProfileLoader = styled(BgBox)`
  height: 108px;
  justify-content: center;
`;

//! Fallback
export const DogProfileFallback = styled(BgBox)`
  height: 108px;
  gap: 2px;
`;
