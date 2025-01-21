import { render, fireEvent } from '@testing-library/react-native';
import FormInput from './index';

describe('FormInput', () => {
  const defaultProps = {
    value: '',
    onChangeText: jest.fn(),
  };

  it('renders BaseInput by default', () => {
    const { getByPlaceholderText } = render(<FormInput {...defaultProps} placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('renders MultilineInput when multiline prop is true', () => {
    const { getByPlaceholderText } = render(
      <FormInput {...defaultProps} placeholder="Enter multiline text" multiline maxLines={3} />,
    );
    const input = getByPlaceholderText('Enter multiline text');
    expect(input.props.multiline).toBe(true);
  });

  it('renders PressableInput when onPress prop is provided', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = render(<FormInput {...defaultProps} placeholder="Press me" onPress={onPress} />);
    fireEvent.press(getByPlaceholderText('Press me'));
    expect(onPress).toHaveBeenCalled();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInput {...defaultProps} placeholder="Enter text" onChangeText={onChangeText} />,
    );
    fireEvent.changeText(getByPlaceholderText('Enter text'), 'New text');
    expect(onChangeText).toHaveBeenCalledWith('New text');
  });

  it('displays the correct value', () => {
    const { getByDisplayValue } = render(<FormInput {...defaultProps} value="Test Value" />);
    expect(getByDisplayValue('Test Value')).toBeTruthy();
  });
});
