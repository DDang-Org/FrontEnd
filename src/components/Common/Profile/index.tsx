import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { SvgProps } from 'react-native-svg';

type ProfileProps = {
  size: number;
  src: string | React.FC<SvgProps>;
  userId?: number;
};

export default function Profile({ size, src, userId }: ProfileProps) {
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
    >
      {renderImage()}
    </TouchableOpacity>
  );
}
