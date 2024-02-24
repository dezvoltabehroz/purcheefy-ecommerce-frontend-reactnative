import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from 'screens/dashboard/DashboardScreen';
import AddStoreDetailsScreen from 'screens/home/AddStoreDetailsScreen';
import StoresListingScreen from 'screens/home/StoresListingScreen';
import {DashboardStackParamList} from 'utils/types';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen
        name="StoresListingScreen"
        component={StoresListingScreen}
      />
      <Stack.Screen
        name="AddStoreDetailsScreen"
        component={AddStoreDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
