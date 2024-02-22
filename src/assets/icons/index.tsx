import {IconType} from 'utils/types';
import Logo from './Logo.svg';
import Sms from './Sms.svg';
import Lock from './Lock.svg';
import EyeClose from './EyeClose.svg';
import Person from './Person.svg';
import ChevronLeft from './ChevronLeft.svg';
import Cart from './Cart.svg';
import Dashboard from './Dashboard.svg';
import Delete from './Delete.svg';
import Exclamation from './Exclamation.svg';
import Logout from './Logout.svg';
import Menu from './Menu.svg';
import MenuVertical from './MenuVertical.svg';
import Notification from './Notification.svg';
import NotificationActive from './NotificationActive.svg';
import Profile from './Profile.svg';
import Setting from './Setting.svg';
import Store from './Store.svg';
import Archive from './Archive.svg';
import Badge from './Badge.svg';

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
    EyeClose: <EyeClose {...props} />,
    Lock: <Lock {...props} />,
    Sms: <Sms {...props} />,
    Person: <Person {...props} />,
    ChevronLeft: <ChevronLeft {...props} />,
    Cart: <Cart {...props} />,
    Dashboard: <Dashboard {...props} />,
    Delete: <Delete {...props} />,
    Exclamation: <Exclamation {...props} />,
    Logout: <Logout {...props} />,
    Menu: <Menu {...props} />,
    MenuVertical: <MenuVertical {...props} />,
    Notification: <Notification {...props} />,
    NotificationActive: <NotificationActive {...props} />,
    Profile: <Profile {...props} />,
    Setting: <Setting {...props} />,
    Store: <Store {...props} />,
    Archive: <Archive {...props} />,
    Badge: <Badge {...props} />,
  };
  return icons[iconName];
};
