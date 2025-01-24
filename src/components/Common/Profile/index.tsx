import React, { Suspense } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { getAvatar } from '~utils/getAvatar';
import * as S from './styles';
interface ProfileProps {
  size: number;
  src?: string | React.FC<SvgProps>;
  userId?: number;
  testID?: string;
  avatarNumber?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export const Profile = ({ size, src, userId, testID, avatarNumber }: ProfileProps) => {
  if (src && avatarNumber) {
    throw new Error('Profile 컴포넌트의 props가 적절하지 않습니다. src, avatarNumber 중 하나만 작성해 주세요.');
  }
  const avatars = getAvatar();
  const renderImage = () => {
    if (avatarNumber) {
      const AvatarComponent = avatars[avatarNumber];
      return (
        <Suspense fallback={<S.ProfileImageLoader style={{ width: size, height: size }} />}>
          {AvatarComponent && <AvatarComponent width={size} height={size} />}
        </Suspense>
      );
    }
    if (!src) {
      throw new Error('Profile 컴포넌트의 props가 적절하지 않습니다. src, avatarNumber 중 하나는 작성해 주세요.');
    }
    if (typeof src === 'string') {
      return <Image source={{ uri: src }} style={{ width: size, height: size }} />;
    }

    const SvgComponent = src;
    return <SvgComponent width={size} height={size} />;
  };

  return (
    <TouchableOpacity activeOpacity={userId ? 0.8 : 1} disabled={!userId} testID={testID}>
      {renderImage()}
    </TouchableOpacity>
  );
};

//userId 란?

// 클릭 가능한 프로필
// <Profile
//   size={64}
//   src={Avatar1}
//   userId={1}  // 클릭 시 opacity 0.8로 변경되며 터치 피드백 제공
// />

// 클릭 불가능한 프로필
// <Profile
//   size={64}
//   src={Avatar1}
// userId 없음 - 터치 피드백 없이 항상 opacity 1 유지
// />
