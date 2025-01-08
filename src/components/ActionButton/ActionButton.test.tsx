import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '~styles/theme';
import { ActionButton } from '~components/index.js';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('ActionButton', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = renderWithTheme(<ActionButton text="Test Button" onPress={() => {}} />);
    expect(getByTestId('action-button')).toBeTruthy();
  });

  it('applies correct style based on type prop', () => {
    const { getByTestId } = renderWithTheme(
      <ActionButton text="Rounded Button" type="roundedRect" onPress={() => {}} />,
    );
    const button = getByTestId('action-button');
    expect(button.props.style).toHaveProperty('borderRadius', 12);
  });

  it('disables the button when disabled prop is true', () => {
    const { getByTestId } = renderWithTheme(<ActionButton text="Disabled Button" disabled onPress={() => {}} />);
    const button = getByTestId('action-button');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = renderWithTheme(<ActionButton text="Pressable Button" onPress={onPressMock} />);
    const button = getByTestId('action-button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies correct background color based on bgColor prop', () => {
    const { getByTestId } = renderWithTheme(<ActionButton text="Colored Button" bgColor="gc_1" onPress={() => {}} />);
    const button = getByTestId('action-button');
    expect(button.props.style).toHaveProperty('backgroundColor', lightTheme.colors.gc_1);
  });

  it('applies correct font weight based on fontWeight prop', () => {
    const { getByText } = renderWithTheme(<ActionButton text="Bold Button" fontWeight="bold" onPress={() => {}} />);
    const buttonText = getByText('Bold Button');
    expect(buttonText.props.style).toHaveProperty('fontWeight', '700'); // Assuming 'bold' corresponds to '700'
  });

  it('handles long text correctly', () => {
    const longText = 'This is a very long button text that should be handled properly';
    const { getByText } = renderWithTheme(<ActionButton text={longText} onPress={() => {}} />);
    expect(getByText(longText)).toBeTruthy();
  });
});
