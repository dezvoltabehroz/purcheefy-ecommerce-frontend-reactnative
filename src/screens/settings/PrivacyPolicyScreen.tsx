import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import {ScrollView, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';

const PrivacyPolicyScreen = () => {
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Privacy Policy" showBackIcon withElevation />
      <ScrollView style={defaultStyles.paddingHorizontal24}>
        <VerticalSpacer factor={2} />
        <AppText fontWeight="medium" style={defaultStyles.h5}>
          Privacy Policy
        </AppText>
        <VerticalSpacer factor={3} />
        <AppText style={[defaultStyles.body2, {color: '#686868'}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </AppText>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;
