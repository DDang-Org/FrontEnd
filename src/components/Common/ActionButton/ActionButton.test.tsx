import { ThemeProvider } from '@emotion/react';
import { fireEvent, render } from '@testing-library/react-native';
import { ActionButton } from '~components/Common/ActionButton';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('ActionButton', () => {
  it('기본 props로 올바르게 렌더링됩니다', () => {
    const { getByTestId } = renderWithTheme(<ActionButton text="Test Button" onPress={() => {}} />);
    expect(getByTestId('action-button')).toBeTruthy();
  });

  it('type prop에 따라 올바른 스타일을 적용합니다', () => {
    const { getByTestId } = renderWithTheme(
      <ActionButton text="Rounded Button" type="roundedRect" onPress={() => {}} />,
    );
    const button = getByTestId('action-button');
    expect(button.props.style[0]).toHaveProperty('borderTopLeftRadius', 12);
    expect(button.props.style[0]).toHaveProperty('borderTopRightRadius', 12);
    expect(button.props.style[0]).toHaveProperty('borderBottomLeftRadius', 12);
    expect(button.props.style[0]).toHaveProperty('borderBottomRightRadius', 12);
  });

  it('disabled prop이 true일 때 버튼을 비활성화합니다', () => {
    const { getByTestId } = renderWithTheme(<ActionButton text="Disabled Button" disabled onPress={() => {}} />);
    const button = getByTestId('action-button');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('버튼이 눌렸을 때 onPress를 호출합니다', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = renderWithTheme(<ActionButton text="Pressable Button" onPress={onPressMock} />);
    const button = getByTestId('action-button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('bgColor prop에 따라 올바른 배경색을 적용합니다', () => {
    const { getByTestId } = renderWithTheme(<ActionButton text="Colored Button" bgColor="gc_1" onPress={() => {}} />);
    const button = getByTestId('action-button');
    expect(button.props.style[0]).toHaveProperty('backgroundColor', lightTheme.colors.gc_1);
  });

  it('긴 텍스트를 올바르게 처리합니다', () => {
    const longText = 'This is a very long button text that should be handled properly';
    const { getByText } = renderWithTheme(<ActionButton text={longText} onPress={() => {}} />);
    expect(getByText(longText)).toBeTruthy();
  });
});
