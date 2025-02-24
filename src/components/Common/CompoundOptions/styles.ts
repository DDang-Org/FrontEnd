import styled from '@emotion/native';
import { TextRegular } from '~components/Common/Text';

export const OptionBackground = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const OptionButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  gap: 5px;
`;

export const OptionText = styled(TextRegular)<{ isDanger: boolean }>`
  font-size: 17px;
  color: ${props => (props.isDanger ? 'red' : 'black')};
`;

export const TitleContainer = styled.View`
  align-items: center;
  padding: 15px;
`;

export const TitleText = styled(TextRegular)`
  font-size: 16px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.gc_2};
`;
