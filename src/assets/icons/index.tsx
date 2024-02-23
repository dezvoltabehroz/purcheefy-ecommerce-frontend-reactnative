import {IconType} from 'utils/types';
import Logo from './Logo.svg';
import Sms from './Sms.svg';
import Lock from './Lock.svg';
import LockWhite from './LockWhite.svg';
import EyeClose from './EyeClose.svg';
import Person from './Person.svg';
import ChevronLeft from './ChevronLeft.svg';
import ChevronDown from './ChevronDown.svg';
import Cart from './Cart.svg';
import Cart2 from './Cart2.svg';
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
import BackIcon from './BackIcon.svg';
import Globe from './Globe.svg';
import Whatsapp from './Whatsapp.svg';
import Privacy from './Privacy.svg';

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
    LockWhite: <LockWhite {...props} />,
    Sms: <Sms {...props} />,
    Person: <Person {...props} />,
    ChevronLeft: <ChevronLeft {...props} />,
    Cart: <Cart {...props} />,
    Cart2: <Cart2 {...props} />,
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
    ChevronDown: <ChevronDown {...props} />,
    BackIcon: <BackIcon {...props} />,
    Globe: <Globe {...props} />,
    Whatsapp: <Whatsapp {...props} />,
    Privacy: <Privacy {...props} />,
  };
  return icons[iconName];
};
