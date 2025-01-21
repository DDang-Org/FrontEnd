import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MultilineInput } from './index';

describe('MultilineInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<MultilineInput placeholder="Enter multiline text" />);
    expect(getByPlaceholderText('Enter multiline text')).toBeTruthy();
  });

  it('limits input to maxLines', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <MultilineInput placeholder="Enter text" maxLines={2} onChangeText={onChangeText} />,
    );
    fireEvent.changeText(getByPlaceholderText('Enter text'), 'Line 1\nLine 2\nLine 3');
    expect(onChangeText).toHaveBeenCalledWith('Line 1\nLine 2');
  });

  it('allows multiline input', () => {
    const { getByPlaceholderText } = render(<MultilineInput placeholder="Enter text" />);
    const input = getByPlaceholderText('Enter text');
    expect(input.props.multiline).toBe(true);
  });
});
