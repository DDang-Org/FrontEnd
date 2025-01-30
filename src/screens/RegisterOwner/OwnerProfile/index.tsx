import * as S from './styles';
import { ActionButton } from '~components/Common/ActionButton';
import { Icon } from '~components/Common/Icons';

export function RegisterOwnerProfile() {
  return (
    <S.RegisterOwner>
      <S.AddAvatarBtn onPress={() => console.log('모달 이동')}>
        <Icon.AddDogPicture />
      </S.AddAvatarBtn>
      <ActionButton onPress={() => console.log('다음 이동')} text="다음~!" />
    </S.RegisterOwner>
  );
}
