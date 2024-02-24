import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from 'components/menus/CustomSidebarMenu';
import NotificationsListingScreen from 'screens/home/NotificationsListingScreen';
import {colors} from 'utils/themes';
import {MainDrawerParamList} from 'utils/types';
import SettingStack from './SettingStack';
import DashboardStack from './DashboardStack';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // swipeEnabled: false,
        drawerStyle: {
          backgroundColor: colors.white,
        },
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="DashboardStack" component={DashboardStack} />
      <Drawer.Screen
        name="NotificationsListingScreen"
        component={NotificationsListingScreen}
      />
      <Drawer.Screen name="SettingStack" component={SettingStack} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
