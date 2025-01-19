import { PropsWithChildren } from 'react';
import * as S from '~components/Common/StatContainer/styles';

const Value = ({ value }: { value: string }) => <S.Value fontSize={20}>{value}</S.Value>;
const Label = ({ label }: { label: string }) => <S.Label fontSize={13}>{label}</S.Label>;

export const StatContainer = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

StatContainer.Item = S.Item;
StatContainer.Value = Value;
StatContainer.Label = Label;
