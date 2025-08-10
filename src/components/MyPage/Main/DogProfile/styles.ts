import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold, TextMedium } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';
interface IconProps {
  expanded: boolean;
}

export const DogProfile = styled(BgBox)`
  min-height: 80px;
  height: auto;
  overflow: hidden;
  flex-direction: column;
  gap: 19px;
  align-items: center;
  padding-bottom: 10px;
  padding-top: -10px;
`;

export const Info = styled.View`
  /* flex: 1; */
  
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
  width: 100%;
  gap: 19px;
`;

export const OtherDogProfile = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 11px;
  
  padding: 14px 20px;
  background-color: white;
  border-radius: 16px;
`;

export const ArrowBtnWrapper = styled.View`
  margin-left: auto;
  width: 24px;
  height: 24px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

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
