import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordVisible: boolean;
  confirmPassword: string;
  confirmPasswordVisible: boolean;
}

const RegistrationScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    email: '',
    password: '',
    passwordVisible: false,
    name: '',
    confirmPassword: '',
    confirmPasswordVisible: false,
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

  const _onToggleConfirmPasswordState = () => {
    setFormState(oldValues => ({
      ...oldValues,
      confirmPasswordVisible: !oldValues.confirmPasswordVisible,
    }));
  };

  return (
    <SafeAreaView style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <ScrollView style={[defaultStyles.paddingHorizontal24]}>
        <VerticalSpacer factor={6} />
        <View style={defaultStyles.center}>
          {getIcon('Logo', {width: rw(48)})}
          <VerticalSpacer factor={2} />
          <AppText
            fontWeight="bold"
            style={[defaultStyles.textAlignCenter, defaultStyles.h4]}>
            {strings.createNewAccount}
          </AppText>
          <VerticalSpacer />
          <AppText
            style={[
              defaultStyles.textGrey1,
              defaultStyles.textAlignCenter,
              defaultStyles.paddingHorizontal16,
            ]}>
            {strings.looksLikeNoAccount}
          </AppText>
        </View>
        <VerticalSpacer factor={2} />
        <TextField
          placeholder={strings.name}
          name="name"
          value={formState.name}
          onChangeText={_handleChangeText}
          leadingIcon="Person"
        />
        <VerticalSpacer factor={1.5} />
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
        <VerticalSpacer factor={1.5} />
        <TextField
          placeholder={strings.confirmPassword}
          name="confirmPassword"
          value={formState.confirmPassword}
          onChangeText={_handleChangeText}
          trailingIcon={'EyeClose'}
          leadingIcon="Lock"
          onPressTrailingIcon={_onToggleConfirmPasswordState}
          secureTextEntry={!formState.passwordVisible}
        />
        <VerticalSpacer factor={3} />
        <BigButton title={strings.signup} />
        <VerticalSpacer factor={4} />
        <AppText
          fontWeight="light"
          style={[
            defaultStyles.textAlignCenter,
            defaultStyles.textBlack100,
            defaultStyles.body2,
          ]}>
          {strings.alreadyHaveAccount}{' '}
          <AppText
            // onPress={_handleLoginNavigation}
            fontWeight="semiBold"
            style={[defaultStyles.textPrimary, defaultStyles.body2]}>
            {strings.login}
          </AppText>
        </AppText>
        <VerticalSpacer factor={2} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RegistrationScreen;
