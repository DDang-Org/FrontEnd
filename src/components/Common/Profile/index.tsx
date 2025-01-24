import React, { Suspense } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useUser } from '~apis/member/useUser';
import { AvatarNumber } from '~types/avatar-number';
import { getAvatar } from '~utils/getAvatar';
import * as S from './styles';
import ErrorBoundary, { FallbackComponentProps } from 'react-native-error-boundary';

interface ProfileProps {
  size: number;
  src?: string | React.FC<SvgProps>;
  userId?: number;
  testID?: string;
  avatarNumber?: AvatarNumber;
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
      return <S.ProfileWithSrc source={{ uri: src }} style={{ width: size, height: size }} />;
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

const DefaultProfile = ({ size }: { size: number }) => <S.ProfileImageLoader style={{ width: size, height: size }} />;

const MyProfileFallback = ({}: FallbackComponentProps) => <S.ProfileImageFallback />;

const MyProfileDataProvider = ({ size }: { size: number }) => {
  const { avatarNumber, memberId } = useUser();
  return <Profile size={size} avatarNumber={avatarNumber} userId={memberId} />;
};

const MyProfile = ({ size }: { size: number }) => {
  return (
    <ErrorBoundary FallbackComponent={MyProfileFallback}>
      <Suspense fallback={<DefaultProfile size={size} />}>
        <MyProfileDataProvider size={size} />
      </Suspense>
    </ErrorBoundary>
  );
};

Profile.Mine = MyProfile;
