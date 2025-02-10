import { lazy } from 'react';
import { SvgProps } from 'react-native-svg';

const Avatar1 = lazy(() => import('~assets/avatars/Avatar1.svg'));
const Avatar2 = lazy(() => import('~assets/avatars/Avatar2.svg'));
const Avatar3 = lazy(() => import('~assets/avatars/Avatar3.svg'));
const Avatar4 = lazy(() => import('~assets/avatars/Avatar4.svg'));
const Avatar5 = lazy(() => import('~assets/avatars/Avatar5.svg'));
const Avatar6 = lazy(() => import('~assets/avatars/Avatar6.svg'));
const Avatar7 = lazy(() => import('~assets/avatars/Avatar7.svg'));
const Avatar8 = lazy(() => import('~assets/avatars/Avatar8.svg'));
const Avatar9 = lazy(() => import('~assets/avatars/Avatar9.svg'));
const Avatar10 = lazy(() => import('~assets/avatars/Avatar10.svg'));

const avatarComponents = [
  null,
  (props?: SvgProps) => <Avatar1 {...props} />,
  (props?: SvgProps) => <Avatar2 {...props} />,
  (props?: SvgProps) => <Avatar3 {...props} />,
  (props?: SvgProps) => <Avatar4 {...props} />,
  (props?: SvgProps) => <Avatar5 {...props} />,
  (props?: SvgProps) => <Avatar6 {...props} />,
  (props?: SvgProps) => <Avatar7 {...props} />,
  (props?: SvgProps) => <Avatar8 {...props} />,
  (props?: SvgProps) => <Avatar9 {...props} />,
  (props?: SvgProps) => <Avatar10 {...props} />,
];

export const getAvatar = () => avatarComponents;
