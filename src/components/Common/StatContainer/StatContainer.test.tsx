import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react-native';
import { StatContainer } from '~components/Common/StatContainer';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('StatContainer', () => {
  it('자식 컴포넌트들을 올바르게 렌더링합니다', () => {
    const { getByText } = renderWithTheme(
      <StatContainer>
        <StatContainer.Item>
          <StatContainer.Value value="100" />
          <StatContainer.Label label="테스트" />
        </StatContainer.Item>
      </StatContainer>,
    );

    expect(getByText('100')).toBeTruthy();
    expect(getByText('테스트')).toBeTruthy();
  });

  it('여러 개의 StatContainer.Item을 렌더링할 수 있습니다', () => {
    const { getByText } = renderWithTheme(
      <StatContainer>
        <StatContainer.Item>
          <StatContainer.Value value="100" />
          <StatContainer.Label label="첫번째" />
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Value value="200" />
          <StatContainer.Label label="두번째" />
        </StatContainer.Item>
      </StatContainer>,
    );

    expect(getByText('100')).toBeTruthy();
    expect(getByText('200')).toBeTruthy();
    expect(getByText('첫번째')).toBeTruthy();
    expect(getByText('두번째')).toBeTruthy();
  });

  it('Value 컴포넌트가 올바른 폰트 크기로 렌더링됩니다', () => {
    const { getByText } = renderWithTheme(
      <StatContainer>
        <StatContainer.Item>
          <StatContainer.Value value="100" />
        </StatContainer.Item>
      </StatContainer>,
    );

    const valueElement = getByText('100');
    expect(valueElement.props.style[0]).toHaveProperty('fontSize', 20);
  });

  it('Label 컴포넌트가 올바른 폰트 크기로 렌더링됩니다', () => {
    const { getByText } = renderWithTheme(
      <StatContainer>
        <StatContainer.Item>
          <StatContainer.Label label="테스트" />
        </StatContainer.Item>
      </StatContainer>,
    );

    const labelElement = getByText('테스트');
    expect(labelElement.props.style[0]).toHaveProperty('fontSize', 13);
  });
});
