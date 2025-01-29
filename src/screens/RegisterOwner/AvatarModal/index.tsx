import * as S from '../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterOwnerParamList } from '~navigation/Auth/RegisterOwnerNavigator';
import { Icon } from '~components/Common/Icons';
import { ScrollView } from 'react-native';
import * as Avatars from '~assets/avatars';
import { Profile } from '~components/Common/Profile';
import { ActionButton } from '~components/Common/ActionButton';
import { useState } from 'react';
import Check from '~assets/avatars/AvatarSelected.svg';

type OwnerAvatarModalProps = NativeStackScreenProps<RegisterOwnerParamList, 'OwnerAvatarModal'>;

export const OwnerAvatarModal = ({ navigation, route }: OwnerAvatarModalProps) => {
  const avatarList = Object.values(Avatars);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(route.params?.selectedAvatar || null);

  const handleAvatarSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNextPress = () => {
    if (selectedIndex !== null) {
      navigation.setParams({ selectedAvatar: selectedIndex });
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100, padding: 16 }}>
      <S.ModalContainer>
        <S.ModalContent>
          {/* 닫기 버튼 */}
          <S.CloseButton onPress={() => navigation.goBack()}>
            <Icon.Close />
          </S.CloseButton>

          <S.ModalComment>
            <S.RegisterCommentText fontSize={24}>맘에 드는</S.RegisterCommentText>
            <S.RegisterCommentText fontSize={24}>캐릭터를 선택해 주세요.</S.RegisterCommentText>
          </S.ModalComment>

          {/* 아바타 그리드 */}
          <S.AvatarGrid>
            {avatarList.map((Avatar, index) => (
              <S.AvatarWrapper key={index}>
                {/* 아바타 */}
                <Profile size={157} src={Avatar} userId={1} onPress={() => handleAvatarSelect(index)} />
                {/* 선택된 아바타 위에 Check 표시 */}
                {selectedIndex === index && (
                  <S.AvatarOverlay>
                    <Check width={157} height={157} />
                  </S.AvatarOverlay>
                )}
              </S.AvatarWrapper>
            ))}
          </S.AvatarGrid>
        </S.ModalContent>

        {/* 다음 버튼 */}
        <S.NextButtonWrapper>
          <ActionButton onPress={handleNextPress} text="다음" disabled={selectedIndex === null} />
        </S.NextButtonWrapper>
      </S.ModalContainer>
    </ScrollView>
  );
};
