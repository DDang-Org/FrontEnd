import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { SvgProps } from 'react-native-svg';

type ProfileProps = {
    size: number;
    src: string | React.FC<SvgProps>;
    userId?: number;
    testID?: string;  // (테스트 코드용)testID를 옵셔널 prop으로 추가
};

export default function Profile({ 
    size, 
    src, 
    userId,
    testID 
    }: ProfileProps) {
        const renderImage = () => {
        if (typeof src === 'string') {
            return <Image source={{ uri: src }} style={{ width: size, height: size }} />;
        }
        const SvgComponent = src;
        return <SvgComponent width={size} height={size} />;
        };
    
        return (
        <TouchableOpacity 
            activeOpacity={userId ? 0.8 : 1} 
            disabled={!userId}
            testID={testID}
        >
            {renderImage()}
        </TouchableOpacity>
        );
    }

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