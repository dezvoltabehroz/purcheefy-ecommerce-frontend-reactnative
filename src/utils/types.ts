import {NavigatorScreenParams} from '@react-navigation/native';
import {IconProps} from 'assets/icons';

export type FontFamily = 'Poppins';
export type FontWeight =
  | 'bold'
  | 'extraBold'
  | 'extraLight'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semiBold'
  | 'thin';

export type MainStackParamList = {
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  ResetPasswordScreen: undefined;
  OtpVerificationScreen: undefined;
  Home: undefined;
};

export type MainDrawerParamList = {
  NotificationsListingScreen: undefined;
  SettingStack: undefined;
  DashboardStack: NavigatorScreenParams<DashboardStackParamList>;
};

export type SettingStackParamList = {
  SettingsListingScreen: undefined;
  ResetPasswordSettingScreen: undefined;
  PrivacyPolicyScreen: undefined;
  ConnectWhatsappScreen: undefined;
  ChangeLanguageScreen: undefined;
};

export type DashboardStackParamList = {
  DashboardScreen: undefined;
  StoresListingScreen: undefined;
  AddStoreDetailsScreen: undefined;
  CartListingScreen: undefined;
  CartDetailScreen: undefined;
  NotesListingScreen: undefined;
  EditNoteScreen: undefined;
  NoteDetailScreen: undefined;
  AddCardScreen: undefined;
};

export interface DrawerItemType {
  id: string;
  icon: IconType;
  title: string;
}

export type IconType =
  | 'Logo'
  | 'EyeClose'
  | 'Lock'
  | 'Sms'
  | 'Person'
  | 'ChevronLeft'
  | 'ChevronDown'
  | 'Cart'
  | 'Cart2'
  | 'Dashboard'
  | 'Delete'
  | 'DeleteWhite'
  | 'Exclamation'
  | 'Exclamation2'
  | 'Card'
  | 'Logout'
  | 'Menu'
  | 'MenuVertical'
  | 'Notification'
  | 'NotificationActive'
  | 'Profile'
  | 'Setting'
  | 'Store'
  | 'Archive'
  | 'Badge'
  | 'BackIcon'
  | 'Globe'
  | 'Whatsapp'
  | 'Privacy'
  | 'LockWhite'
  | 'LockBlack'
  | 'Tick'
  | 'DrupalGrey'
  | 'Drupal'
  | 'WordpressGrey'
  | 'Wordpress'
  | 'MagentoGrey'
  | 'Magento'
  | 'ShopifyGrey'
  | 'Shopify'
  | 'JoomlaGrey'
  | 'Joomla'
  | 'WhatsappBlack'
  | 'Search'
  | 'Filter'
  | 'NoteFill'
  | 'PersonFill'
  | 'MenuDots'
  | 'Plus'
  | 'ArchiveWhite';

export interface CartTileProps {
  title: string;
  value: string;
  cartCount: number;
  backgroundColor?: string;
  onPress?: () => void;
  cartType?: CartType;
  createdAt?: string;
  attemptsCount?: number;
  recoveredOn?: string;
  cartLeftSince?: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'In-App' | 'Cart';
  read: boolean;
}

export interface SettingMenuItem {
  id: string;
  title: string;
  icon: IconType;
  iconProps?: IconProps;
  bgColor: string;
  navigation?:
    | 'ResetPasswordSettingScreen'
    | 'PrivacyPolicyScreen'
    | 'ConnectWhatsappScreen'
    | 'ChangeLanguageScreen';
}

export interface StoreType {
  id: string;
  title: string;
  activeIcon: IconType;
  activeIconProps?: IconProps;
  disabledIcon: IconType;
  disabledIconProps?: IconProps;
  activeBgColor: string;
  activeBorderColor: string;
}

export type CartType = 'Abandoned' | 'Active' | 'Recovered';
