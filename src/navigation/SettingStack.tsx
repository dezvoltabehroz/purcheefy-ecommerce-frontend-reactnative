import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ResetPasswordSettingScreen from 'screens/home/ResetPasswordSettingScreen';
import SettingsListingScreen from 'screens/home/SettingsListingScreen';
import {SettingStackParamList} from 'utils/types';

const Stack = createNativeStackNavigator<SettingStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="SettingsListingScreen"
        component={SettingsListingScreen}
      />
      <Stack.Screen
        name="ResetPasswordSettingScreen"
        component={ResetPasswordSettingScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
