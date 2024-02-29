import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import SuccessModal from 'components/modals/SuccessModal';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';

interface FormValues {
  currentPassword: string;
  currentPasswordVisible: boolean;
  newPassword: string;
  newPasswordVisible: boolean;
  confirmNewPassword: string;
  confirmNewPasswordVisible: boolean;
}

const ResetPasswordSettingScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    currentPassword: '',
    currentPasswordVisible: false,
    newPassword: '',
    newPasswordVisible: false,
    confirmNewPassword: '',
    confirmNewPasswordVisible: false,
  });
  const [showSuccessPassword, setShowSuccessPassword] = useState(false);

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _onToggleCurrentPasswordState = () => {
    setFormState(oldValues => ({
      ...oldValues,
      currentPasswordVisible: !oldValues.currentPasswordVisible,
    }));
  };

  const _onToggleNewPasswordState = () => {
    setFormState(oldValues => ({
      ...oldValues,
      newPasswordVisible: !oldValues.newPasswordVisible,
    }));
  };

  const _onToggleConfirmNewPasswordState = () => {
    setFormState(oldValues => ({
      ...oldValues,
      confirmNewPasswordVisible: !oldValues.confirmNewPasswordVisible,
    }));
  };

  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Reset Password" showBackIcon withElevation />
      <ScrollView style={defaultStyles.paddingHorizontal24}>
        <VerticalSpacer factor={6} />
        <View style={defaultStyles.center}>
          {getIcon('LockBlack', {width: rw(60), height: rw(60)})}
          <VerticalSpacer />
          <AppText
            fontWeight="semiBold"
            style={[defaultStyles.textAlignCenter, defaultStyles.h5]}>
            Want to change the password?
          </AppText>
          <AppText
            style={[
              defaultStyles.textAlignCenter,
              defaultStyles.body3Small,
              styles.subheading,
            ]}>
            Fill your details and change the password!
          </AppText>
        </View>
        <VerticalSpacer factor={3} />
        <TextField
          placeholder="Old Password"
          name="currentPassword"
          value={formState.currentPassword}
          onChangeText={_handleChangeText}
          trailingIcon={'EyeClose'}
          leadingIcon="Lock"
          onPressTrailingIcon={_onToggleCurrentPasswordState}
          secureTextEntry={!formState.currentPasswordVisible}
        />
        <VerticalSpacer factor={2} />
        <TextField
          placeholder="New Password"
          name="newPassword"
          value={formState.newPassword}
          onChangeText={_handleChangeText}
          trailingIcon={'EyeClose'}
          leadingIcon="Lock"
          onPressTrailingIcon={_onToggleNewPasswordState}
          secureTextEntry={!formState.newPasswordVisible}
        />
        <VerticalSpacer factor={2} />
        <TextField
          placeholder="Confirm Password"
          name="confirmNewPassword"
          value={formState.confirmNewPassword}
          onChangeText={_handleChangeText}
          trailingIcon={'EyeClose'}
          leadingIcon="Lock"
          onPressTrailingIcon={_onToggleConfirmNewPasswordState}
          secureTextEntry={!formState.confirmNewPasswordVisible}
        />
        <VerticalSpacer factor={3} />
        <BigButton
          title={strings.submit}
          onPress={() => setShowSuccessPassword(true)}
        />
      </ScrollView>
      <SuccessModal
        visible={showSuccessPassword}
        primaryButtonTitle={strings.login}
        onClose={() => setShowSuccessPassword(false)}>
        <View
          style={[
            defaultStyles.center,
            styles.iconContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('Tick')}
        </View>
      </SuccessModal>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  iconContainer: {
    width: rw(62),
    height: rw(62),
    borderRadius: rw(62),
    backgroundColor: '#23C934',
  },
});

export default ResetPasswordSettingScreen;
