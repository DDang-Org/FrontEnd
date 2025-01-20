import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react-native';
import { DescriptionWithTimeStamp } from '.';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('DescriptionWithTimeStamp', () => {
  const mockProps = {
    description: 'Test Description',
    time: '12:00 PM',
  };

  it('description과 time이 올바르게 렌더링됩니다', () => {
    const { getByText } = renderWithTheme(
      <DescriptionWithTimeStamp description={mockProps.description} time={mockProps.time} />,
    );

    expect(getByText(mockProps.description)).toBeTruthy();
    expect(getByText(mockProps.time)).toBeTruthy();
  });

  it('긴 description이 3줄로 제한됩니다', () => {
    const longDescription = 'This is a very long description that should be limited to three lines. '.repeat(5);
    const { getByText } = renderWithTheme(
      <DescriptionWithTimeStamp description={longDescription} time={mockProps.time} />,
    );

    const descriptionElement = getByText(longDescription);
    expect(descriptionElement.props.numberOfLines).toBe(3);
  });

  it('Dot 컴포넌트가 렌더링됩니다', () => {
    const { getByTestId } = renderWithTheme(
      <DescriptionWithTimeStamp description={mockProps.description} time={mockProps.time} />,
    );

    expect(getByTestId('dot')).toBeTruthy();
  });

  it('시간 텍스트가 올바른 스타일로 렌더링됩니다', () => {
    const { getByText } = renderWithTheme(
      <DescriptionWithTimeStamp description={mockProps.description} time={mockProps.time} />,
    );

    const timeElement = getByText(mockProps.time);
    expect(timeElement.props.style[0]).toHaveProperty('fontSize', 13);
    expect(timeElement.props.style[0]).toHaveProperty('color', lightTheme.colors.font_3);
  });

  it('설명 텍스트가 올바른 폰트 크기로 렌더링됩니다', () => {
    const { getByText } = renderWithTheme(
      <DescriptionWithTimeStamp description={mockProps.description} time={mockProps.time} />,
    );

    const descriptionElement = getByText(mockProps.description);
    expect(descriptionElement.props.style[0]).toHaveProperty('fontSize', 15);
  });
});
