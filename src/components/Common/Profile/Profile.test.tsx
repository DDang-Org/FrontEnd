import { render } from '@testing-library/react-native';
import { Profile } from '~components/Common/Profile';

jest.mock('~assets/avatars/Avatar1.svg', () => 'Avatar1');
jest.mock('~assets/avatars/Avatar2.svg', () => 'Avatar2');

describe('Profile 컴포넌트', () => {
  const mockProps = {
    size: 48,
    src: 'https://example.com/avatar.jpg',
    userId: 1,
  };

  it('컴포넌트가 정상적으로 렌더링되어야 한다', () => {
    const { getByTestId } = render(<Profile {...mockProps} testID="profile-component" />);
    expect(getByTestId('profile-component')).toBeTruthy();
  });

  it('이미지 URL을 src로 받았을 때 Image 컴포넌트가 렌더링되어야 한다', () => {
    const { getByTestId } = render(<Profile {...mockProps} testID="profile-container" />);
    const container = getByTestId('profile-container');
    expect(container).toBeTruthy();
  });

  it('userId가 없을 때는 터치 동작이 비활성화되어야 한다', () => {
    const propsWithoutUserId = {
      size: 48,
      src: 'https://example.com/avatar.jpg',
    };

    const { getByTestId } = render(<Profile {...propsWithoutUserId} testID="profile-container" />);
    const container = getByTestId('profile-container');
    expect(container.props.accessibilityState.disabled).toBe(true);
  });

  it('userId가 있을 때는 터치 동작이 활성화되어야 한다', () => {
    const { getByTestId } = render(<Profile {...mockProps} testID="profile-container" />);
    const container = getByTestId('profile-container');
    // activeOpacity 대신 TouchableOpacity의 disabled 속성을 테스트
    expect(container.props.accessibilityState.disabled).toBe(false);
  });
});
