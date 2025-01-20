import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormInput from './index';

describe('FormInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<FormInput placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('handles text input correctly', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(<FormInput placeholder="Enter text" onChangeText={onChangeText} />);
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Hello, World!');
    expect(onChangeText).toHaveBeenCalledWith('Hello, World!');
  });

  it('limits input to two lines', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInput placeholder="Enter text" onChangeText={onChangeText} multiline />,
    );
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Line 1\nLine 2\nLine 3');
    expect(onChangeText).toHaveBeenCalledWith('Line 1\nLine 2');
  });

  it('handles focus and blur', () => {
    const { getByPlaceholderText } = render(<FormInput placeholder="Enter text" />);
    const input = getByPlaceholderText('Enter text');
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
  });

  it('disables input when onPress is provided', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = render(<FormInput placeholder="Enter text" onPress={onPress} />);
    const input = getByPlaceholderText('Enter text');
    expect(input.props.editable).toBe(false);
  });
});
