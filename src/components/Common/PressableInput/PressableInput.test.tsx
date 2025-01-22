import { render, fireEvent } from '@testing-library/react-native';
import { PressableInput } from './index';

describe('PressableInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<PressableInput placeholder="Press me" onPress={() => {}} />);
    expect(getByPlaceholderText('Press me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = render(<PressableInput placeholder="Press me" onPress={onPress} />);
    fireEvent.press(getByPlaceholderText('Press me'));
    expect(onPress).toHaveBeenCalled();
  });

  it('is not editable', () => {
    const { getByPlaceholderText } = render(<PressableInput placeholder="Press me" onPress={() => {}} />);
    expect(getByPlaceholderText('Press me').props.editable).toBe(false);
  });
});
