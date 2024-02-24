import {DrawerItemType, StoreType} from 'utils/types';

export const drawerOptions: DrawerItemType[] = [
  {
    id: '1',
    title: 'Notifications',
    icon: 'Notification',
  },
  {
    id: '2',
    title: 'Dashboard',
    icon: 'Dashboard',
  },
  {
    id: '3',
    title: 'Connect Store',
    icon: 'Store',
  },
  {
    id: '4',
    title: 'Abandoned carts',
    icon: 'Cart',
  },
  {
    id: '5',
    title: 'Recovered carts',
    icon: 'Exclamation',
  },
  {
    id: '6',
    title: 'Archive carts',
    icon: 'Archive',
  },
  {
    id: '7',
    title: 'Delete Account',
    icon: 'Delete',
  },
  {
    id: '8',
    title: 'Settings',
    icon: 'Setting',
  },
];

export const storesList: StoreType[] = [
  {
    id: '1',
    title: 'Shopify',
    activeIcon: 'Shopify',
    disabledIcon: 'ShopifyGrey',
    activeBgColor: 'rgba(149, 191, 71, 0.15)',
    activeBorderColor: 'rgba(149, 191, 71, 0.25)',
  },
  {
    id: '2',
    title: 'WordPress',
    activeIcon: 'Wordpress',
    disabledIcon: 'WordpressGrey',
    activeBgColor: 'rgba(0, 116, 154, 0.15)',
    activeBorderColor: 'rgba(0, 116, 154, 0.25)',
  },
  {
    id: '3',
    title: 'Magento',
    activeIcon: 'Magento',
    disabledIcon: 'MagentoGrey',
    activeBgColor: 'rgba(243, 123, 32, 0.15)',
    activeBorderColor: 'rgba(243, 123, 32, 0.25)',
  },
  {
    id: '4',
    title: 'Drupal',
    activeIcon: 'Drupal',
    disabledIcon: 'DrupalGrey',
    activeBgColor: 'rgba(0, 115, 186, 0.15)',
    activeBorderColor: 'rgba(0, 115, 186, 0.25)',
  },
  {
    id: '5',
    title: 'Joomla',
    activeIcon: 'Joomla',
    disabledIcon: 'JoomlaGrey',
    activeBgColor: 'rgba(249, 165, 65, 0.15)',
    activeBorderColor: 'rgba(249, 165, 65, 0.25)',
  },
];
