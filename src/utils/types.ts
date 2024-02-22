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
  DashboardScreen: undefined;
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
  | 'Dashboard'
  | 'Delete'
  | 'Exclamation'
  | 'Logout'
  | 'Menu'
  | 'MenuVertical'
  | 'Notification'
  | 'NotificationActive'
  | 'Profile'
  | 'Setting'
  | 'Store'
  | 'Archive'
  | 'Badge';

export interface CartTileProps {
  title: string;
  value: string;
  cartCount: number;
  backgroundColor?: string;
  onPress?: () => void;
}
