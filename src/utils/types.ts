import {NavigatorScreenParams} from '@react-navigation/native';
import {IconProps} from 'assets/icons';
import {ImageSourcePropType} from 'react-native';

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
  CartListingScreen: {cartType: CartType};
  CartDetailScreen: undefined;
  NotesListingScreen: undefined;
  EditNoteScreen: undefined;
  NoteDetailScreen: undefined;
  AddCardScreen: undefined;
  EditCartScreen: undefined;
  ProductsListingScreen: undefined;
  ShopperProfileScreen: undefined;
  OrderDetailScreen: undefined;
  ProductDetailScreen: undefined;
  AddDiscountScreen: undefined;
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
  | 'Question'
  | 'ChevronDown2'
  | 'ArchiveWhite'
  | 'Close'
  | 'WordpressHorizontal'
  | 'Telephone'
  | 'ShopifyHorizontal'
  | 'MagentoHorizontal'
  | 'DrupalHorizontal'
  | 'WhatsappShare'
  | 'MailShare'
  | 'LinkShare'
  | 'MoreShare'
  | 'PlusBlack'
  | 'JoomlaHorizontal'
  | 'ChevronLeftWhite'
  | 'Star'
  | 'StarFilled'
  | 'Clock'
  | 'Camera'
  | 'FileImage';

export interface BottomSheetProps {
  visible: boolean;
  heading?: string;
  onCloseModal: () => void;
  headerLeadingIcon?: IconType | undefined;
  onPressLeadingIcon?: () => void | undefined;
  addExtraHeaderMargin?: boolean;
}

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
  horizontalIcon: IconType;
  activeBgColor: string;
  activeBorderColor: string;
}

export type CartType = 'Abandoned' | 'Active' | 'Recovered' | 'Archive';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: ImageSourcePropType[];
}

export type DiscountType = 'Percentage' | 'Currency';

export type UploadedImageSource = 'Gallery' | 'Camera';
