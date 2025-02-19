import React from 'react';
import { Pressable } from 'react-native';
import { Profile } from '~components/Common/Profile';
import * as S from './styles';

interface DogItemProps {
  dog: {
    dogId: number;
    dogName: string;
    breed: string;
    dogProfileImg: string;
  };
  isSelected?: boolean; // 선택된 강아지를 강조하기 위한 플래그
  onPress?: () => void; // 클릭 이벤트 핸들러
}

export const DogItem = ({ dog, isSelected = false, onPress }: DogItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <S.DogItemWrapper isSelected={isSelected}>
        <Profile src={dog.dogProfileImg} size={60} />
        <S.Info>
          <S.Name fontSize={15}>{dog.dogName}</S.Name>
          <S.Breed fontSize={11}>{dog.breed}</S.Breed>
        </S.Info>
      </S.DogItemWrapper>
    </Pressable>
  );
};
