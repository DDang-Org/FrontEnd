import styled from '@emotion/native';
import { Image } from 'react-native';

type ProfileImageProps = {
    size: number;
    userId?: number;
};

export const ProfileImage = styled(Image)<ProfileImageProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: ${({ size }) => size / 2}px;
    background-color: ${({ theme }) => theme.colors.lighten_2};
    opacity: ${({ userId }) => (userId ? 1 : 0.7)};
`;

