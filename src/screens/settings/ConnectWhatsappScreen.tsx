import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import {ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';

const ConnectWhatsappScreen = () => {
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="WhatsApp number" showBackIcon withElevation />
      <ScrollView style={defaultStyles.paddingHorizontal24}>
        <VerticalSpacer factor={6} />
        <View style={defaultStyles.center}>
          {getIcon('WhatsappBlack', {width: rw(60), height: rw(60)})}
          <VerticalSpacer />
          <AppText
            fontWeight="semiBold"
            style={[defaultStyles.textAlignCenter, defaultStyles.h5]}>
            Add your whatsapp number!
          </AppText>
          <AppText
            style={[
              defaultStyles.textAlignCenter,
              defaultStyles.body3Small,
              styles.subheading,
            ]}>
            Your phone number has been linked to your account. you can add and
            change number below.{' '}
          </AppText>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ConnectWhatsappScreen;
