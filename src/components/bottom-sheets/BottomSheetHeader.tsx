import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {IconType} from 'utils/types';

interface Props {
  heading: string;
  onCloseModal: () => void;
  leadingIcon?: IconType;
  onPressLeadingIcon?: () => void | undefined;
}

const BottomSheetHeader = (props: Props) => {
  return (
    <View
      style={[
        styles.container,
        props.leadingIcon === undefined && styles.containerLeft,
      ]}>
      <AppText
        fontWeight="semiBold"
        style={[defaultStyles.textBlack, defaultStyles.h5]}>
        {props.heading}
      </AppText>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onCloseModal}
        style={styles.closeButton}>
        {getIcon('Close', {width: rw(24), height: rh(24)})}
      </TouchableOpacity>
      {props.leadingIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPressLeadingIcon}
          style={styles.leadingButton}>
          {getIcon(props.leadingIcon, {
            width: rw(24),
            height: rh(24),
            fill: colors.black,
          })}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: rw(16),
    paddingVertical: rh(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeft: {
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    right: rw(16),
  },
  leadingButton: {
    position: 'absolute',
    left: rw(16),
  },
});

export default BottomSheetHeader;
