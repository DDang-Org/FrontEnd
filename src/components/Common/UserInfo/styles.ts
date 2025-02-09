import styled from '@emotion/native';
import { TextBold, TextMedium } from '~components/Common/Text';

export const UserInfo = styled.View``;

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.gc_4};
`;
export const Item = styled.View`
  padding: 0 16px;
`;
export const ItemWrapper = styled.View<{ isLast: boolean }>`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gc_4};
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isLast, theme }) => (isLast ? 'transparent' : theme.colors.gc_2)};
`;

export const LeftContentContainer = styled.View`
  flex-direction: row;
`;
export const TypoWrapper = styled.View`
  margin-left: 12px;
`;
export const Name = styled(TextBold)``;
export const GenderFamilyRoleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const Gender = styled(TextMedium)``;
export const FamilyRole = styled(TextMedium)``;
export const Button = styled.Pressable`
  padding: 9.5px 16px;
  background-color: ${({ theme }) => theme.colors.lighten_3};
  border-radius: 12px;
`;
export const ButtonText = styled(TextBold)`
  text-align: center;
`;
