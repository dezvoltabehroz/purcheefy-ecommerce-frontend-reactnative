import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from 'screens/dashboard/DashboardScreen';
import {DashboardStackParamList} from 'utils/types';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
