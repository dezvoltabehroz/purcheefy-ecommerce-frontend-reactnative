import images from 'assets/images';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import RadioButton from 'components/buttons/RadioButton';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';

const ChangeLanguageScreen = () => {
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Select Language" showBackIcon withElevation />
      <VerticalSpacer factor={4} />
      <View style={defaultStyles.paddingHorizontal24}>
        <RadioButton leadingImage={images.english} title="English" selected />
        <VerticalSpacer factor={2.5} />
        <RadioButton leadingImage={images.arabic} title="عربي" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangeLanguageScreen;
