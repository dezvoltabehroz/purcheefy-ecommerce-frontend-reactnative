import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import SettingsMenuSection from 'components/sections/SettingsMenuSection';
import {ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {SettingMenuItem} from 'utils/types';

const accountOptions: SettingMenuItem[] = [
  {
    id: '1',
    title: 'Reset Password',
    icon: 'LockWhite',
    bgColor: '#4C61EB',
    navigation: 'ResetPasswordSettingScreen',
  },
  {
    id: '2',
    title: 'Language',
    icon: 'Globe',
    bgColor: colors.primary,
  },
  {
    id: '3',
    title: 'Connect WhatsApp number',
    icon: 'Whatsapp',
    bgColor: '#23C934',
  },
];

const otherOptions: SettingMenuItem[] = [
  {
    id: '4',
    title: 'Privacy Policy',
    icon: 'Privacy',
    bgColor: '#4CB1EB',
    navigation: 'PrivacyPolicyScreen',
  },
];

const SettingsListingScreen = () => {
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Settings" showBackIcon withElevation />
      <ScrollView style={styles.container}>
        <VerticalSpacer factor={3} />
        <SettingsMenuSection options={accountOptions} heading="Account" />
        <VerticalSpacer factor={3} />
        <SettingsMenuSection options={otherOptions} heading="Others" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(24),
  },
});

export default SettingsListingScreen;
