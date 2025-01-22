import Bell from '~assets/icons/bell.svg';
import Gps from '~assets/icons/gps.svg';
import Gear from '~assets/icons/gear.svg';
import Prev from '~assets/icons/prev.svg';
import Clock from '~assets/icons/clock.svg';
import Close from '~assets/icons/close.svg';
import Ellipsis from '~assets/icons/ellipsis.svg';
import Graph from '~assets/icons/graph.svg';
import AddDogProfile from '~assets/icons/add-dog-profile.svg';
import AddDogPicture from '~assets/icons/add-dog-picture.svg';
import Edit from '~assets/icons/edit.svg';
import { SvgProps } from 'react-native-svg';
import Female from '~assets/icons/female.svg';
import Male from '~assets/icons/male.svg';

export const Icon = {
  Bell: (props: SvgProps) => <Bell {...props} />,
  Gps: (props: SvgProps) => <Gps {...props} />,
  Gear: (props: SvgProps) => <Gear {...props} />,
  Prev: (props: SvgProps) => <Prev {...props} />,
  Clock: (props: SvgProps) => <Clock {...props} />,
  Close: (props: SvgProps) => <Close {...props} />,
  Ellipsis: (props: SvgProps) => <Ellipsis {...props} />,
  Graph: (props: SvgProps) => <Graph {...props} />,
  AddDogProfile: (props: SvgProps) => <AddDogProfile {...props} />,
  AddDogPicture: (props: SvgProps) => <AddDogPicture {...props} />,
  Edit: (props: SvgProps) => <Edit {...props} />,
  Female: (props: SvgProps) => <Female {...props} />,
  Male: (props: SvgProps) => <Male {...props} />,
};
