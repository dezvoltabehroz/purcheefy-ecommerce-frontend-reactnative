import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import PrivacyPolicyScreen from 'screens/settings/PrivacyPolicyScreen';
import ResetPasswordSettingScreen from 'screens/settings/ResetPasswordSettingScreen';
import SettingsListingScreen from 'screens/settings/SettingsListingScreen';
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
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
