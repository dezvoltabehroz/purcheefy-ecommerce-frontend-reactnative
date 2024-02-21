import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import images from 'assets/images';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import SuccessModal from 'components/modals/SuccessModal';
import {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {MainStackParamList} from 'utils/types';

interface FormValues {
  email: '';
}

const ResetPasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [formState, setFormState] = useState<FormValues>({email: ''});

  const _handleGoback = () => {
    navigation.goBack();
  };

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _handleOtpVerification = () => {
    navigation.navigate('OtpVerificationScreen');
  };

  return (
    <SafeAreaView
      style={[
        defaultStyles.flex1,
        defaultStyles.paddingHorizontal24,
        defaultStyles.bgWhite,
      ]}>
      <VerticalSpacer factor={2} />
      <TouchableOpacity activeOpacity={0.8} onPress={_handleGoback}>
        {getIcon('ChevronLeft', {width: rw(24)})}
      </TouchableOpacity>
      <VerticalSpacer factor={4} />
      <AppText fontWeight="bold" style={[defaultStyles.h4]}>
        {strings.resetPassword}
      </AppText>
      <VerticalSpacer />
      <AppText style={[defaultStyles.textGrey1]}>
        {strings.weWillSendLink}
      </AppText>
      <VerticalSpacer factor={2} />
      <TextField
        placeholder={strings.enterEmail}
        name="email"
        value={formState.email}
        onChangeText={_handleChangeText}
        leadingIcon="Sms"
      />
      <VerticalSpacer factor={4} />
      <BigButton title={strings.submit} onPress={_handleOtpVerification} />
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
