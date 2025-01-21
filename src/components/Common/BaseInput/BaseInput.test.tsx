import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BaseInput from './index';

describe('BaseInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<BaseInput placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('handles focus and blur events', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByPlaceholderText } = render(<BaseInput placeholder="Test input" onFocus={onFocus} onBlur={onBlur} />);
    const input = getByPlaceholderText('Test input');

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onCustomChangeText when text changes', () => {
    const onCustomChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <BaseInput placeholder="Test input" onCustomChangeText={onCustomChangeText} />,
    );
    const input = getByPlaceholderText('Test input');

    fireEvent.changeText(input, 'New text');
    expect(onCustomChangeText).toHaveBeenCalledWith('New text');
  });

  it('applies correct styles when focused', () => {
    const { getByPlaceholderText } = render(<BaseInput placeholder="Test input" />);
    const input = getByPlaceholderText('Test input');

    fireEvent(input, 'focus');
    expect(input.props.style).toContainEqual(expect.objectContaining({ borderWidth: 1 }));

    fireEvent(input, 'blur');
    expect(input.props.style).toContainEqual(expect.objectContaining({ borderWidth: 0 }));
  });
});
