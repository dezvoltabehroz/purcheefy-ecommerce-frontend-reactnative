import {IconType} from 'utils/types';
import Logo from './Logo.svg';

import {rw} from 'utils/dimentions';

export interface IconProps {
  height?: number;
  width?: number;
  color?: string;
  stroke?: string;
  fill?: string;
  scaleX?: 1 | -1;
  onPress?: () => void;
}

const defaultProps: IconProps = {
  width: rw(30),
  height: rw(30),
  scaleX: 1,
  // color: 'red',
};

export const getIcon = (
  iconName: IconType,
  props: IconProps = defaultProps,
) => {
  const icons: any = {
    Logo: <Logo {...props} />,
  };
  return icons[iconName];
};
