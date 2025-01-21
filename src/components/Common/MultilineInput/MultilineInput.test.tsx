import { ThemeProvider } from '@emotion/react';
import { fireEvent, render } from '@testing-library/react-native';
import { MultilineInput } from './index';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('MultilineInput', () => {
  it('기본 props로 올바르게 렌더링됩니다', () => {
    const { getByPlaceholderText } = renderWithTheme(<MultilineInput placeholder="Test Input" />);
    expect(getByPlaceholderText('Test Input')).toBeTruthy();
  });

  it('maxLines prop에 따라 입력을 제한합니다', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(
      <MultilineInput placeholder="Test Input" maxLines={2} onChangeText={onChangeText} />,
    );
    const input = getByPlaceholderText('Test Input');

    fireEvent.changeText(input, 'Line 1\nLine 2\nLine 3');
    expect(onChangeText).toHaveBeenCalledWith('Line 1\nLine 2');
  });

  it('multiline prop이 true로 설정되어 있습니다', () => {
    const { getByPlaceholderText } = renderWithTheme(<MultilineInput placeholder="Test Input" />);
    const input = getByPlaceholderText('Test Input');
    expect(input.props.multiline).toBe(true);
  });

  it('초기 값을 올바르게 표시합니다', () => {
    const { getByDisplayValue } = renderWithTheme(<MultilineInput value="Initial\nValue" />);
    expect(getByDisplayValue('Initial\nValue')).toBeTruthy();
  });

  it('onChangeText 콜백을 호출합니다', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(
      <MultilineInput placeholder="Test Input" onChangeText={onChangeText} />,
    );
    const input = getByPlaceholderText('Test Input');

    fireEvent.changeText(input, 'New Text');
    expect(onChangeText).toHaveBeenCalledWith('New Text');
  });
});
