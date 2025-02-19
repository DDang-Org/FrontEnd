import styled from '@emotion/native';
import { TextSemiBold } from '~components/Common/Text';

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

export const OptionText = styled(TextSemiBold)<{ isDanger: boolean }>`
  font-size: 17px;
  color: ${props => (props.isDanger ? 'red' : 'black')};
`;

export const TitleContainer = styled.View`
  align-items: center;
  padding: 15px;
`;

export const TitleText = styled(TextSemiBold)`
  font-size: 16px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
`;

// optionBackground: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0,0,0/0.5)',
//   },
//   optionContainer: {
//     borderRadius: 15,
//     marginHorizontal: 10,
//     marginBottom: 10,
//     backgroundColor: 'white',
//     overflow: 'hidden',
//   },
//   optionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 50,
//     gap: 5,
//   },
//   optionButtonPressed: {
//     backgroundColor: '#F1F1F5',
//   },
//   optionText: {
//     fontSize: 17,
//     color: 'black',
//     fontWeight: '500',
//   },
//   dangerText: {
//     color: 'red',
//   },
//   titleContainer: {
//     alignItems: 'center',
//     padding: 15,
//   },
//   titleText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'black',
//   },
//   border: {
//     borderBottomColor: 'gray',
//     borderBottomWidth: 1,
//   },
