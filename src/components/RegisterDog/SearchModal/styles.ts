import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 160px 20px 0 20px;
`;

export const SearchContainer = styled.View`
  background-color: transparent;
  flex: 1;
  margin-bottom: 350px;
  gap: 4px;
`;

export const SearchResults = styled.ScrollView`
  background-color: ${props => props.theme.colors.gc_4};
  flex: 1;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  padding: 4px;
`;

export const SearchResult = styled.Pressable`
  width: 100%;
  height: 55px;
  padding: 16px 20px;
`;

export const Highlight = styled(TextBold)`
  color: ${props => props.theme.colors.darken};
`;
