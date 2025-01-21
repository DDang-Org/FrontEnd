import { ThemeProvider } from '@emotion/react';
import { fireEvent, render } from '@testing-library/react-native';
import FormInput from './index';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('FormInput', () => {
  it('기본 props로 올바르게 렌더링됩니다', () => {
    const { getByPlaceholderText } = renderWithTheme(<FormInput placeholder="Test Input" />);
    expect(getByPlaceholderText('Test Input')).toBeTruthy();
  });

  it('multiline prop이 true일 때 MultilineInput을 렌더링합니다', () => {
    const { getByPlaceholderText } = renderWithTheme(<FormInput placeholder="Multiline Input" multiline />);
    const input = getByPlaceholderText('Multiline Input');
    expect(input.props.multiline).toBe(true);
  });

  it('onPress prop이 제공될 때 PressableInput을 렌더링합니다', () => {
    const onPress = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(<FormInput placeholder="Pressable Input" onPress={onPress} />);
    const input = getByPlaceholderText('Pressable Input');
    fireEvent.press(input);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('value prop을 올바르게 표시합니다', () => {
    const { getByDisplayValue } = renderWithTheme(<FormInput value="Test Value" />);
    expect(getByDisplayValue('Test Value')).toBeTruthy();
  });

  it('onChangeText 콜백을 호출합니다', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(
      <FormInput placeholder="Test Input" onChangeText={onChangeText} />,
    );
    const input = getByPlaceholderText('Test Input');
    fireEvent.changeText(input, 'New Text');
    expect(onChangeText).toHaveBeenCalledWith('New Text');
  });
});
