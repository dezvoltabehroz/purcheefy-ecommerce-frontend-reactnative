import {IconType} from 'utils/types';
import Logo from './Logo.svg';
import Sms from './Sms.svg';
import Lock from './Lock.svg';
import LockBlack from './LockBlack.svg';
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
import ArchiveWhite from './ArchiveWhite.svg';
import Badge from './Badge.svg';
import BackIcon from './BackIcon.svg';
import Globe from './Globe.svg';
import Whatsapp from './Whatsapp.svg';
import WhatsappBlack from './WhatsappBlack.svg';
import Privacy from './Privacy.svg';
import Tick from './Tick.svg';
import DrupalGrey from './DrupalGrey.svg';
import Drupal from './Drupal.svg';
import JoomlaGrey from './JoomlaGrey.svg';
import Joomla from './Joomla.svg';
import MagentoGrey from './MagentoGrey.svg';
import Magento from './Magento.svg';
import ShopifyGrey from './ShopifyGrey.svg';
import Shopify from './Shopify.svg';
import WordpressGrey from './WordpressGrey.svg';
import Wordpress from './Wordpress.svg';
import Search from './Search.svg';
import Filter from './Filter.svg';
import PersonFill from './PersonFill.svg';
import NoteFill from './NoteFill.svg';
import MenuDots from './MenuDots.svg';
import Plus from './Plus.svg';

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
    LockBlack: <LockBlack {...props} />,
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
    ArchiveWhite: <ArchiveWhite {...props} />,
    Badge: <Badge {...props} />,
    ChevronDown: <ChevronDown {...props} />,
    BackIcon: <BackIcon {...props} />,
    Globe: <Globe {...props} />,
    Whatsapp: <Whatsapp {...props} />,
    WhatsappBlack: <WhatsappBlack {...props} />,
    Privacy: <Privacy {...props} />,
    Tick: <Tick {...props} />,
    DrupalGrey: <DrupalGrey {...props} />,
    Drupal: <Drupal {...props} />,
    WordpressGrey: <WordpressGrey {...props} />,
    Wordpress: <Wordpress {...props} />,
    MagentoGrey: <MagentoGrey {...props} />,
    Magento: <Magento {...props} />,
    ShopifyGrey: <ShopifyGrey {...props} />,
    Shopify: <Shopify {...props} />,
    JoomlaGrey: <JoomlaGrey {...props} />,
    Joomla: <Joomla {...props} />,
    Search: <Search {...props} />,
    Filter: <Filter {...props} />,
    NoteFill: <NoteFill {...props} />,
    PersonFill: <PersonFill {...props} />,
    MenuDots: <MenuDots {...props} />,
    Plus: <Plus {...props} />,
  };
  return icons[iconName];
};
