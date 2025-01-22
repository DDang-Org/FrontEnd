import { render, fireEvent } from '@testing-library/react-native';
import { BaseInput } from './index';

describe('BaseInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<BaseInput placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(<BaseInput placeholder="Enter text" onChangeText={onChangeText} />);
    fireEvent.changeText(getByPlaceholderText('Enter text'), 'New text');
    expect(onChangeText).toHaveBeenCalledWith('New text');
  });

  it('applies bold style when value is not empty', () => {
    const { getByTestId } = render(<BaseInput value="Some text" testID="base-input" />);
    expect(getByTestId('base-input').props.style).toContainEqual(expect.objectContaining({ fontFamily: 'SUIT-Bold' }));
  });
});
