import { ThemeProvider } from '@emotion/react';
import { fireEvent, render } from '@testing-library/react-native';
import { PressableInput } from './index';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('PressableInput', () => {
  it('기본 props로 올바르게 렌더링됩니다', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(<PressableInput placeholder="Press me" onPress={onPress} />);
    expect(getByPlaceholderText('Press me')).toBeTruthy();
  });

  it('onPress 함수를 호출합니다', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(<PressableInput placeholder="Press me" onPress={onPress} />);
    const input = getByPlaceholderText('Press me');
    fireEvent.press(input);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('입력이 비활성화되어 있습니다', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(<PressableInput placeholder="Press me" onPress={onPress} />);
    const input = getByPlaceholderText('Press me');
    expect(input.props.editable).toBe(false);
  });

  it('value prop을 올바르게 표시합니다', () => {
    const onPress = jest.fn();
    const { getByDisplayValue } = renderWithTheme(<PressableInput value="Pressable Value" onPress={onPress} />);
    expect(getByDisplayValue('Pressable Value')).toBeTruthy();
  });

  it('pointerEvents가 "none"으로 설정되어 있습니다', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(<PressableInput placeholder="Press me" onPress={onPress} />);
    const input = getByPlaceholderText('Press me');
    expect(input.props.pointerEvents).toBe('none');
  });
});
