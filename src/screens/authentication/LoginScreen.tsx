import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {MainStackParamList} from 'utils/types';

interface FormValues {
  email: string;
  password: string;
  passwordVisible: boolean;
}

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [formState, setFormState] = useState<FormValues>({
    email: '',
    password: '',
    passwordVisible: false,
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _onTogglePasswordState = () => {
    setFormState(oldValues => ({
      ...oldValues,
      passwordVisible: !oldValues.passwordVisible,
    }));
  };

  const _handlePasswordResetNavigation = () => {
    navigation.navigate('ResetPasswordScreen');
  };

  const _handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView
      style={[
        defaultStyles.flex1,
        defaultStyles.paddingHorizontal24,
        defaultStyles.center,
        defaultStyles.bgWhite,
      ]}>
      <StatusBar barStyle="dark-content" />
      {getIcon('Logo', {width: rw(48)})}
      <VerticalSpacer factor={2} />
      <AppText
        fontWeight="bold"
        style={[defaultStyles.textAlignCenter, defaultStyles.h4]}>
        {strings.welcomeBack}
      </AppText>
      <VerticalSpacer />
      <AppText
        style={[
          defaultStyles.textGrey1,
          defaultStyles.textAlignCenter,
          defaultStyles.paddingHorizontal16,
        ]}>
        {strings.loginToYourAccount}
      </AppText>
      <VerticalSpacer factor={2} />
      <TextField
        placeholder={strings.enterEmail}
        name="email"
        value={formState.email}
        onChangeText={_handleChangeText}
        leadingIcon="Sms"
      />
      <VerticalSpacer factor={1.5} />
      <TextField
        placeholder={strings.password}
        name="password"
        value={formState.password}
        onChangeText={_handleChangeText}
        trailingIcon={'EyeClose'}
        leadingIcon="Lock"
        onPressTrailingIcon={_onTogglePasswordState}
        secureTextEntry={!formState.passwordVisible}
      />
      <VerticalSpacer factor={0.5} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={defaultStyles.alignSelfEnd}
        onPress={_handlePasswordResetNavigation}>
        <AppText style={[defaultStyles.textPrimary, defaultStyles.body2]}>
          {strings.forgotPassword}
        </AppText>
      </TouchableOpacity>
      <VerticalSpacer factor={3} />
      <BigButton title={strings.login} onPress={_handleLogin} />
      <VerticalSpacer factor={3} />
      <AppText
        fontWeight="light"
        style={[
          defaultStyles.textAlignCenter,
          defaultStyles.textBlack100,
          defaultStyles.body2,
        ]}>
        {strings.didntHaveAccount}{' '}
        <AppText
          // onPress={_handleLoginNavigation}
          fontWeight="semiBold"
          style={[defaultStyles.textPrimary, defaultStyles.body2]}>
          {strings.createOne}
        </AppText>
      </AppText>
    </SafeAreaView>
  );
};

export default LoginScreen;
