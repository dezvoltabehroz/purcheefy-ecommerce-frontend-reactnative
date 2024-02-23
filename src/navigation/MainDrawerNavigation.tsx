import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from 'components/menus/CustomSidebarMenu';
import DashboardScreen from 'screens/home/DashboardScreen';
import NotificationsListingScreen from 'screens/home/NotificationsListingScreen';
import {colors} from 'utils/themes';
import {MainDrawerParamList} from 'utils/types';

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
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen
        name="NotificationsListingScreen"
        component={NotificationsListingScreen}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
