import { Icon } from '~components/Common/Icons';
import * as S from './styles';

export const NoWalkLog = () => {
  const randomDogIcon = Math.random() < 0.5 ? <Icon.DogAnnoyed /> : <Icon.DogDisappointed />;

  return (
    <S.NoWalkLog>
      {randomDogIcon}
      <S.NoWalkLogMessage fontSize={14}>산책 기록이 없어요</S.NoWalkLogMessage>
    </S.NoWalkLog>
  );
};
