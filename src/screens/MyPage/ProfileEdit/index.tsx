import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import * as S from './styles';
import { Modal, TouchableOpacity, View } from 'react-native';
import { BaseInput } from '~components/Common/BaseInput';
import { PressableInput } from '~components/Common/PressableInput';
import DatePicker from 'react-native-date-picker';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { ActionButton } from '~components/Common/ActionButton';
import { Icon } from '~components/Common/Icons';
import { useEffect, useRef, useState } from 'react';
import { Profile } from '~components/Common/Profile';
import { dateToString, stringToDate } from '~utils/dateFormat';
import Check from '~assets/avatars/AvatarSelected.svg';
import * as Avatars from '~assets/avatars';
import { useToast } from '~hooks/useToast';
import { UserProfileType } from '~types/user-profile';
import { validateUserProfile } from '~utils/validateUserProfile';
import { useUpdateUser, useUser } from '~apis/member/useUser';
import { useNavigation } from '@react-navigation/native';
import { FAMILY_ROLE } from '~constants/family-role';

export const ProfileEditScreen = () => {
  const myProfile = useUser();
  const { showFormErrorToast } = useToast();
  const [user, setUser] = useState<UserProfileType>({
    memberName: myProfile.memberName,
    address: myProfile.address,
    memberGender: myProfile.memberGender,
    memberBirthDate: myProfile.memberBirthDate.split('-').join('. '),
    familyRole: FAMILY_ROLE[myProfile.familyRole],
    memberProfileImg: myProfile.memberProfileImg,
  });
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isAvatarModalVisible, setIsAvatarModalVisible] = useState(false);
  const [isFamilyModalVisible, setIsFamilyModalVisible] = useState(false);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number | null>(null);
  const confirmButtonRef = useRef<View | null>(null);
  const updateUser = useUpdateUser();
  const navigation = useNavigation();

  const avatarList = Object.values(Avatars);
  const familyOptions = ['엄마', '아빠', '언니(누나)', '오빠(형)', '할아버지', '할머니'];

  const handleConfirmPress = () => {
    const error = validateUserProfile(user);
    if (error) {
      showFormErrorToast(error, confirmButtonRef);
      return;
    }
    updateUser.mutate(user, {
      onSuccess: () => navigation.goBack(),
    });
  };

  useEffect(() => {
    setSelectedAvatarIndex(user.memberProfileImg! - 1);
  }, [user.memberProfileImg]);

  useEffect(() => {
    if (selectedAvatarIndex !== null) {
      setUser(prevUser => ({ ...prevUser, memberProfileImg: selectedAvatarIndex + 1 }));
    }
  }, [selectedAvatarIndex]);

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={{ paddingBottom: 10, padding: 16 }}>
        <S.EditComment>
          <S.EditCommentText fontSize={24}>내 정보 수정</S.EditCommentText>
        </S.EditComment>

        {/* 아바타 선택 */}
        <S.AvatarSelectWrapper>
          {selectedAvatarIndex === null ? (
            <S.StyledAvatarSelect onPress={() => setIsAvatarModalVisible(true)} />
          ) : (
            <TouchableOpacity onPress={() => setIsAvatarModalVisible(true)}>
              <Profile size={180} src={avatarList[selectedAvatarIndex]} />
            </TouchableOpacity>
          )}
        </S.AvatarSelectWrapper>

        {/* 프로필 데이터 입력 */}
        <S.ProfileDataContainer>
          <BaseInput
            placeholder="닉네임 입력"
            value={user.memberName}
            onChangeText={text => setUser({ ...user, memberName: text })}
          />

          {/* 가족 구성원 선택 */}
          <PressableInput
            onPress={() => setIsFamilyModalVisible(true)}
            value={user.familyRole || ''}
            placeholder="가족 포지션 입력"
          />

          {/* 주소 입력 */}
          <PressableInput
            onPress={
              () => setUser({ ...user, address: '양천구 신월동' }) // 주소 선택 로직 추가 가능
            }
            value={user.address}
            placeholder="내 동네 불러오기"
          />

          {/* 생년월일 선택 */}
          <PressableInput
            onPress={() => setOpenDatePicker(true)}
            value={user.memberBirthDate}
            placeholder="생년월일 선택"
          />
          <DatePicker
            title={' '}
            modal
            open={openDatePicker}
            date={user.memberBirthDate ? stringToDate(user.memberBirthDate, '. ') : new Date()}
            onConfirm={date => {
              setOpenDatePicker(false);
              const formattedDate = dateToString(date, '. ');
              setUser({ ...user, memberBirthDate: formattedDate });
            }}
            onCancel={() => setOpenDatePicker(false)}
            mode="date"
            locale="ko"
            confirmText="확인"
            cancelText="취소"
            minimumDate={new Date(1930, 0, 1)}
            maximumDate={new Date()}
          />

          {/* 성별 선택 */}
          <S.GenderButtonWrapper>
            <GenderSelectButton
              gender="MALE"
              isActive={user.memberGender === 'MALE'}
              direction="row"
              onPress={() => setUser({ ...user, memberGender: user.memberGender === 'MALE' ? null : 'MALE' })}
            />
            <GenderSelectButton
              gender="FEMALE"
              isActive={user.memberGender === 'FEMALE'}
              direction="row"
              onPress={() => setUser({ ...user, memberGender: user.memberGender === 'FEMALE' ? null : 'FEMALE' })}
            />
          </S.GenderButtonWrapper>
        </S.ProfileDataContainer>

        {/* 다음 버튼 */}
        <S.NextButtonWrapper ref={confirmButtonRef}>
          <ActionButton onPress={handleConfirmPress} text="수정 완료" />
        </S.NextButtonWrapper>
      </ScrollView>

      {/* 가족 구성원 선택 모달 */}
      <Modal visible={isFamilyModalVisible} animationType="slide" transparent={true}>
        <S.FamilyModalContainer>
          <S.FamilyModalContent>
            {/* 닫기 버튼 */}
            <TouchableOpacity onPress={() => setIsFamilyModalVisible(false)}>
              <Icon.Close />
            </TouchableOpacity>
            <S.FamilyRoleSelectWrapper>
              {familyOptions.map(option => (
                <S.FamilyRoleOption
                  key={option}
                  isSelected={user.familyRole === option}
                  onPress={() => setUser({ ...user, familyRole: option })}
                >
                  <S.FamilyRoleIcon isSelected={user.familyRole === option}>
                    {user.familyRole === option && <S.FamilyRoleIconInner />}
                  </S.FamilyRoleIcon>
                  <S.FamilyRoleText isSelected={user.familyRole === option}>{option}</S.FamilyRoleText>
                </S.FamilyRoleOption>
              ))}
            </S.FamilyRoleSelectWrapper>

            {/* 완료 버튼 */}
            <ActionButton onPress={() => setIsFamilyModalVisible(false)} text="완료" disabled={!user.familyRole} />
          </S.FamilyModalContent>
        </S.FamilyModalContainer>
      </Modal>

      {/* 아바타 선택 모달 */}
      <Modal visible={isAvatarModalVisible} animationType="slide" transparent={true}>
        <S.ModalContainer>
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <S.ModalContent>
              {/* 닫기 버튼 (상단 왼쪽) */}
              <S.CloseButtonWrapper>
                <TouchableOpacity onPress={() => setIsAvatarModalVisible(false)}>
                  <Icon.Close />
                </TouchableOpacity>
              </S.CloseButtonWrapper>

              {/* 아바타 선택 안내 텍스트 */}
              <S.ModalComment>
                <S.EditCommentText fontSize={24}>맘에 드는</S.EditCommentText>
                <S.EditCommentText fontSize={24}>캐릭터를 선택해 주세요.</S.EditCommentText>
              </S.ModalComment>

              {/* 아바타 그리드 */}
              <S.AvatarGrid>
                {avatarList.map((Avatar, index) => (
                  <S.AvatarWrapper key={index}>
                    {/* 아바타 */}
                    <Profile size={157} src={Avatar} userId={1} onPress={() => setSelectedAvatarIndex(index)} />
                    {/* 선택된 아바타 위에 Check 표시 */}
                    {selectedAvatarIndex === index && (
                      <S.AvatarOverlay>
                        <Check width={157} height={157} />
                      </S.AvatarOverlay>
                    )}
                  </S.AvatarWrapper>
                ))}
              </S.AvatarGrid>

              {/* 완료 버튼 */}
              <ActionButton
                onPress={() => setIsAvatarModalVisible(false)}
                text="완료"
                disabled={selectedAvatarIndex === null}
              />
            </S.ModalContent>
          </ScrollView>
        </S.ModalContainer>
      </Modal>
    </GestureHandlerRootView>
  );
};
