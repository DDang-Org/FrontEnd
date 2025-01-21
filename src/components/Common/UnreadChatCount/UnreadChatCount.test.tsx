import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react-native';
import { UnreadChatCount } from '.';
import { lightTheme } from '~styles/theme';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('UnreadChatCount 컴포넌트', () => {
    it('숫자가 올바르게 렌더링됩니다', () => {
        const { getByText } = renderWithTheme(
            <UnreadChatCount unreadCount={5} />
        );
        
        expect(getByText('5')).toBeTruthy();
    });

    it('큰 숫자(99)가 올바르게 렌더링됩니다', () => {
        const { getByText } = renderWithTheme(
            <UnreadChatCount unreadCount={99} />
        );
        
        expect(getByText('99')).toBeTruthy();
    });

    it('0이 올바르게 렌더링됩니다', () => {
        const { getByText } = renderWithTheme(
            <UnreadChatCount unreadCount={0} />
        );
        
        expect(getByText('0')).toBeTruthy();
    });

    it('텍스트 스타일이 올바르게 적용됩니다', () => {
        const { getByText } = renderWithTheme(
            <UnreadChatCount unreadCount={5} />
        );
        
        const textElement = getByText('5');
        const styles = textElement.props.style[0];  // 첫 번째 스타일 객체 확인
        
        // 필수 스타일 속성만 확인
        expect(styles).toEqual(
            expect.objectContaining({
                fontSize: 11,
                color: '#FFFFFF',
                letterSpacing: -0.275,
                lineHeight: 16.5
            })
        );
    });
});
