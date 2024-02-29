import {getIcon} from 'assets/icons';
import images from 'assets/images';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import RadioButton from 'components/buttons/RadioButton';
import SuccessModal from 'components/modals/SuccessModal';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

const ChangeLanguageScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Select Language" showBackIcon withElevation />
      <VerticalSpacer factor={4} />
      <View style={defaultStyles.paddingHorizontal24}>
        <RadioButton leadingImage={images.english} title="English" selected />
        <VerticalSpacer factor={2.5} />
        <RadioButton
          leadingImage={images.arabic}
          title="عربي"
          onPress={() => setShowModal(true)}
        />
      </View>
      <SuccessModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        secondaryButtonTitle="Cancel"
        title="Change Language!"
        description="Are you sure you want to change language? "
        primaryButtonTitle="Continue">
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('Question')}
        </View>
      </SuccessModal>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    width: rw(62),
    height: rw(62),
    borderRadius: rw(62),
    backgroundColor: colors.primary,
  },
});

export default ChangeLanguageScreen;
