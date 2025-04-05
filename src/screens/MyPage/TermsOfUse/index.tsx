import React from 'react';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { MyPageStackProps } from '~navigation/MyPageNavigator';
import { ImageSourcePropType } from 'react-native'; // Import ImageSourcePropType
import Term1 from '~assets/termsofuse/term1.png';
import Term2 from '~assets/termsofuse/term2.png';
import Term3 from '~assets/termsofuse/term3.png';
import Term4 from '~assets/termsofuse/term4.png';
import Term5 from '~assets/termsofuse/term5.png';
import Term6 from '~assets/termsofuse/term6.png';
import * as S from './styles';

// type Props = NativeStackScreenProps<MyPageStackProps, 'TermsOfUse'>;

export const TermsOfUseScreen = () => {
  // const handleBackPress = () => {
  //   navigation.goBack();
  // };

  return (
    <S.Container>
      <S.ScrollContainer>
        {/* 각 이미지 렌더링 */}
        <S.Image source={Term1 as ImageSourcePropType} resizeMode="contain" />
        <S.Image source={Term2 as ImageSourcePropType} resizeMode="contain" />
        <S.Image source={Term3 as ImageSourcePropType} resizeMode="contain" />
        <S.Image source={Term4 as ImageSourcePropType} resizeMode="contain" />
        <S.Image source={Term5 as ImageSourcePropType} resizeMode="contain" />
        <S.Image source={Term6 as ImageSourcePropType} resizeMode="contain" />
      </S.ScrollContainer>
    </S.Container>
  );
};
