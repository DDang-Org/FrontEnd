import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold, TextMedium } from '~components/Common/Text';

export const DogProfile = styled(BgBox)`
flex-direction: column;
gap: 20px;
align-items: center;
height: 108px;
`;
export const Info = styled.View`
flex: 1;
`;
export const Heading = styled.View`
flex-direction: column;
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
