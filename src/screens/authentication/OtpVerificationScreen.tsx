import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {getIcon} from 'assets/icons';
import images from 'assets/images';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import BigButton from 'components/buttons/BigButton';
import SuccessModal from 'components/modals/SuccessModal';
import {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rFB, rh, rw} from 'utils/dimentions';
import {colors, fonts} from 'utils/themes';

const OtpVerificationScreen = () => {
  const navigation = useNavigation();
  const [showSuccessPassword, setShowSuccessPassword] = useState(false);
  const [code, setCode] = useState('');

  const _handleGoback = () => {
    navigation.goBack();
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
        {strings.otpVerification}
      </AppText>
      <VerticalSpacer />
      <AppText style={[defaultStyles.textGrey1]}>{strings.enterCode}</AppText>
      <VerticalSpacer factor={2} />
      <OTPInputView
        style={styles.otpField}
        pinCount={6}
        code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={setCode}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.otpInputField}
        codeInputHighlightStyle={styles.otpInputFieldHighlighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
          // _handleNavigation();
        }}
      />

      <VerticalSpacer factor={4} />
      <BigButton
        title={strings.submit}
        onPress={() => setShowSuccessPassword(true)}
      />

      <SuccessModal
        visible={showSuccessPassword}
        onClose={() => setShowSuccessPassword(false)}>
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          <Image source={images.thumb} style={styles.thumbImage} />
        </View>
      </SuccessModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    width: rw(62),
    height: rw(62),
    borderRadius: rw(62),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbImage: {
    resizeMode: 'contain',
    width: rw(34),
  },
  otpField: {
    width: '100%',
    height: rh(62),
    justifyContent: 'space-evenly',
  },
  otpInputField: {
    width: rw(45),
    height: rh(62),
    borderWidth: 1,
    borderRadius: rFB(4),
    backgroundColor: colors.grey5,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    color: colors.black100,
    fontSize: fontSizes.h6,
    fontFamily: fonts.Poppins.medium,
  },
  otpInputFieldHighlighted: {
    borderColor: colors.primary,
  },
});

export default OtpVerificationScreen;
