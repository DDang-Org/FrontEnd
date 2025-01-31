import { PropsWithChildren } from 'react';
import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';

export const ToggleBox = ({ children }: PropsWithChildren) => {
  return <S.ToggleBox>{children}</S.ToggleBox>;
};

export const Item = ({
  title,
  description,
  enabled,
}: PropsWithChildren<{ title: string; description?: string; enabled: boolean }>) => {
  return (
    <S.Item paddingHorizontal={20} paddingVertical={16.5}>
      <S.TypoWrapper>
        <TextBold fontSize={17}>{title}</TextBold>
        {description && <TextRegular fontSize={15}>{description}</TextRegular>}
      </S.TypoWrapper>
      <S.Toggle value={enabled} />
    </S.Item>
  );
};

ToggleBox.Container = S.Container;
ToggleBox.Item = Item;
