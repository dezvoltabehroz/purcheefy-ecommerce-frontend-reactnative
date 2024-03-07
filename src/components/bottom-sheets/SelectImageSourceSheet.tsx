import {BottomSheetProps, UploadedImageSource} from 'utils/types';
import BottomSheet from './BottomSheet';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import defaultStyles from 'utils/defaultStyles';
import {getIcon} from 'assets/icons';
import HorizontalSpacer from 'components/HorizontalSpacer';
import AppText from 'components/AppText';
import Divider from 'components/common/Divider';
import BigButton from 'components/buttons/BigButton';
import VerticalSpacer from 'components/VerticalSpacer';

interface Props extends BottomSheetProps {
  onItemSelected: (type: UploadedImageSource) => void;
}

const SelectImageSourceSheet = (props: Props) => {
  return (
    <BottomSheet
      visible={props.visible}
      heading="Add Picture"
      headerLeadingIcon={props.headerLeadingIcon}
      onPressLeadingIcon={props.onPressLeadingIcon}
      onCloseModal={props.onCloseModal}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => props.onItemSelected('Camera')}>
          <View style={[styles.iconContainer, styles.cameraIconContainer]}>
            {getIcon('Camera', {width: rw(24), height: rh(24)})}
          </View>
          <HorizontalSpacer factor={1.5} />
          <AppText style={[defaultStyles.flex1, defaultStyles.h6]}>
            Camera
          </AppText>
          {getIcon('ChevronLeft', {scaleX: -1, width: 16})}
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => props.onItemSelected('Gallery')}>
          <View style={[styles.iconContainer, styles.imageIconContainer]}>
            {getIcon('FileImage', {width: rw(24), height: rh(24)})}
          </View>
          <HorizontalSpacer factor={1.5} />
          <AppText style={[defaultStyles.flex1, defaultStyles.h6]}>
            Choose From Gallery
          </AppText>
          {getIcon('ChevronLeft', {scaleX: -1, width: 16})}
        </TouchableOpacity>
        <View style={defaultStyles.flex1} />
        <BigButton
          title="Cancel"
          showPrimaryBorder
          borderColor="#EB4C6052"
          backgroundColor="#EB4C6014"
          color="#EB4C60"
          buttonStyle={styles.bigButton}
          onPress={props.onCloseModal}
        />
        <VerticalSpacer factor={2} />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rh(240),
    paddingHorizontal: rw(16),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rh(16),
  },
  iconContainer: {
    width: rw(40),
    height: rw(40),
    borderRadius: 6,
    ...defaultStyles.center,
  },
  cameraIconContainer: {
    backgroundColor: colors.primary,
  },
  imageIconContainer: {
    backgroundColor: '#4C61EB',
  },
  bigButton: {
    borderRadius: 6,
    paddingVertical: rh(12),
  },
});

export default SelectImageSourceSheet;
