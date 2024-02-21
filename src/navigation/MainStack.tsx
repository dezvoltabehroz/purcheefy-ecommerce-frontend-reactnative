import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from 'screens/authentication/LoginScreen';
import OnboardingScreen from 'screens/authentication/OnboardingScreen';
import OtpVerificationScreen from 'screens/authentication/OtpVerificationScreen';
import RegistrationScreen from 'screens/authentication/RegistrationScreen';
import ResetPasswordScreen from 'screens/authentication/ResetPasswordScreen';
import {MainStackParamList} from 'utils/types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name="OtpVerificationScreen"
        component={OtpVerificationScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
