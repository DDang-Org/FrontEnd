import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextRegular } from '~components/Common/Text';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('BgBox', () => {
  it('기본 props로 올바르게 렌더링됩니다', () => {
    const { getByTestId } = renderWithTheme(
      <BgBox>
        <TextRegular fontSize={15}>Test Content</TextRegular>
      </BgBox>,
    );
    expect(getByTestId('bg-box')).toBeTruthy();
  });

  it('children을 올바르게 렌더링합니다', () => {
    const testText = 'Test Content';
    const { getByText } = renderWithTheme(
      <BgBox>
        <TextRegular fontSize={15}>{testText}</TextRegular>
      </BgBox>,
    );
    expect(getByText(testText)).toBeTruthy();
  });

  it('사용자 지정 패딩을 올바르게 적용합니다', () => {
    const paddingHorizontal = 32;
    const paddingVertical = 24;
    const { getByTestId } = renderWithTheme(
      <BgBox paddingHorizontal={paddingHorizontal} paddingVertical={paddingVertical}>
        <TextRegular fontSize={15}>Test Content</TextRegular>
      </BgBox>,
    );
    const bgBox = getByTestId('bg-box');
    expect(bgBox.props.style[0]).toHaveProperty('paddingTop', paddingVertical);
    expect(bgBox.props.style[0]).toHaveProperty('paddingBottom', paddingVertical);
    expect(bgBox.props.style[0]).toHaveProperty('paddingLeft', paddingHorizontal);
    expect(bgBox.props.style[0]).toHaveProperty('paddingRight', paddingHorizontal);
  });

  it('기본 스타일이 올바르게 적용됩니다', () => {
    const { getByTestId } = renderWithTheme(
      <BgBox>
        <TextRegular fontSize={15}>Test Content</TextRegular>
      </BgBox>,
    );
    const bgBox = getByTestId('bg-box');
    expect(bgBox.props.style[0]).toHaveProperty('backgroundColor', lightTheme.colors.gc_4);
  });
});
