import { PropsWithChildren } from 'react';
import * as S from './styles';

interface BgBoxProps extends PropsWithChildren {
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export const BgBox = ({ children, ...rest }: BgBoxProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
