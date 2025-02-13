import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold, TextMedium } from '~components/Common/Text';

export const DogProfile = styled(BgBox)<{ expanded?: boolean }>`
  min-height: 108px;
  height: ${({ expanded }) => (expanded ? 'auto' : '108px')};
  overflow: hidden;
  flex: 1;
  flex-direction: column;
gap: 20px;
align-items: center;
`;
export const FirstDogProfile = styled.View`
  flex-direction: row;
  min-height: 108px;  overflow: hidden;
  flex: 1;
  gap: 20px;
  align-items: center;
`;

export const OtherDogWrapper = styled.View`
  flex-direction: column;
  min-height: 108px;
  min-width: 300px;
  gap:10px;
`;
export const OtherDogProfile = styled.View`
  flex-direction: row;
  margin: 7px 0;
  gap:15px;
`;

export const Line = styled.View`
  align-items: center;
  padding-bottom: 14px;
  margin-top: -10px;
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
export const Info = styled.View`
  flex: 1;
  /* border:1px solid red; */
`;
export const Heading = styled.View`
  flex-direction: row;
  gap: 3px;
`;
export const EditButton = styled.Pressable`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  border-radius: 10px;
`;

export const DogList = styled.View`
  margin: 5px 0;
`;

export const DogItemWrapper = styled.View<{ isSelected?: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
`;

export const ToggleButton = styled(Pressable)`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  padding: 8px;
`;

export const DogItemContainer = styled.View<{ isSelected?: boolean }>`
  flex-direction: row;
  gap: 20px;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
  transform: scale(${({ isSelected }) => (isSelected ? 1 : 0.95)});
  transition: all 0.3s ease;
`;

export const MetaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const DetailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
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

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
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
