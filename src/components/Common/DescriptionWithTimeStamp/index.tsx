import { Dot } from '~components/Common/Dot';
import * as S from './styles';
import { Pressable } from 'react-native';

interface DescriptionWithTimeStampProps {
  description: string;
  time: string;
  onPress?: () => void;
}

const Description = ({ description }: Pick<DescriptionWithTimeStampProps, 'description'>) => (
  <S.Description fontSize={15} numberOfLines={3}>
    {description}
  </S.Description>
);

const Time = ({ time }: Pick<DescriptionWithTimeStampProps, 'time'>) => (
  <S.Time fontSize={13} color="font_3">
    {time}
  </S.Time>
);

export const DescriptionWithTimeStamp = ({ description, time, onPress }: DescriptionWithTimeStampProps) => {
  return (
    <Pressable onPress={onPress}>
      <S.Container>
        <S.DescriptionWrapper>
          <S.DotWrapper>
            <Dot />
          </S.DotWrapper>
          <Description description={description} />
        </S.DescriptionWrapper>
        <Time time={time} />
      </S.Container>
    </Pressable>
  );
};
