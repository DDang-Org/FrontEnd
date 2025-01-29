import * as S from '../styles';
import { useState } from 'react';
import { ScrollView, Modal, TouchableOpacity } from 'react-native';
import { ActionButton } from '~components/Common/ActionButton';
import { BaseInput } from '~components/Common/BaseInput';
import { FormErrorToast } from '~components/Common/FormErrorToast';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { PressableInput } from '~components/Common/PressableInput';
import DatePicker from 'react-native-date-picker';
import { stringToDate, dateToString } from '~utils/dateFormat';
import { Profile } from '~components/Common/Profile';
import * as Avatars from '~assets/avatars';
import Check from '~assets/avatars/AvatarSelected.svg';
import { Gender } from '~types/gender';

export function RegisterOwnerProfile() {
  const [familyRole, setFamilyRole] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isAvatarModalVisible, setIsAvatarModalVisible] = useState(false);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number | null>(null);

  const avatarList = Object.values(Avatars);
  const isComplete = name && address && birth && selectedGender && familyRole;

  const handleNextPress = () => {
    if (!isComplete) {
      setShowToast(true);
    } else {
      setShowToast(false);
      // 다음 화면으로 이동 로직 추가
      console.log('다음 화면으로 이동');
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, padding: 16 }}>
        <S.RegisterComment>
          <S.RegisterCommentText fontSize={24}>견주님에 대해</S.RegisterCommentText>
          <S.RegisterCommentText fontSize={24}>알려주세요</S.RegisterCommentText>
        </S.RegisterComment>

        {/* 아바타 선택 */}
        <S.AvatarSelectWrapper>
          {/* 아바타가 선택되지 않은 경우에만 StyledAvatarSelect 렌더링 */}
          {selectedAvatarIndex === null ? (
            <S.StyledAvatarSelect onPress={() => setIsAvatarModalVisible(true)} />
          ) : (
            // 선택된 아바타를 클릭하면 모달이 다시 열리도록 설정
            <TouchableOpacity onPress={() => setIsAvatarModalVisible(true)}>
              <Profile size={180} src={avatarList[selectedAvatarIndex]} />
            </TouchableOpacity>
          )}
        </S.AvatarSelectWrapper>

        {/* 프로필 데이터 입력 */}
        <S.ProfileDataContainer>
          <BaseInput placeholder="닉네임 입력" value={name} onChangeText={setName} />
          <PressableInput onPress={() => setFamilyRole('엄마')} value={familyRole} placeholder="가족 포지션 입력" />
          <PressableInput onPress={() => setAddress('양천구 신월동')} value={address} placeholder="내 동네 불러오기" />
          <PressableInput onPress={() => setOpenDatePicker(true)} value={birth} placeholder="생년월일 선택" />

          {/* 생년월일 선택 모달 */}
          <DatePicker
            title={' '}
            modal
            open={openDatePicker}
            date={birth ? stringToDate(birth, '. ') : new Date()}
            onConfirm={date => {
              setOpenDatePicker(false);
              const formattedDate = dateToString(date, '. ');
              setBirth(formattedDate);
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
              isActive={selectedGender === 'MALE'}
              direction="row"
              onPress={() => setSelectedGender(selectedGender === 'MALE' ? null : 'MALE')}
            />
            <GenderSelectButton
              gender="FEMALE"
              isActive={selectedGender === 'FEMALE'}
              direction="row"
              onPress={() => setSelectedGender(selectedGender === 'FEMALE' ? null : 'FEMALE')}
            />
          </S.GenderButtonWrapper>
        </S.ProfileDataContainer>

        {/* 에러 메시지 */}
        {showToast && <FormErrorToast message="모든 정보를 입력해 주세요" />}

        {/* 다음 버튼 */}
        <S.NextButtonWrapper>
          <ActionButton onPress={handleNextPress} text="다음" disabled={!isComplete} />
        </S.NextButtonWrapper>
      </ScrollView>

      {/* 아바타 선택 모달 */}
      <Modal visible={isAvatarModalVisible} animationType="slide" transparent={true}>
        <S.ModalContainer>
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <S.ModalContent>
              {/* 닫기 버튼 */}
              <S.CloseButton onPress={() => setIsAvatarModalVisible(false)}>닫기</S.CloseButton>

              {/* 아바타 선택 안내 텍스트 */}
              <S.ModalComment>
                <S.RegisterCommentText fontSize={24}>맘에 드는</S.RegisterCommentText>
                <S.RegisterCommentText fontSize={24}>캐릭터를 선택해 주세요.</S.RegisterCommentText>
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
    </>
  );
}
