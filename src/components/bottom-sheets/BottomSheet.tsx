import React, {PropsWithChildren} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {rFB, rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {BottomSheetProps} from 'utils/types';
import VerticalSpacer from 'components/VerticalSpacer';
import BottomSheetHeader from './BottomSheetHeader';

const BottomSheet = (props: PropsWithChildren<BottomSheetProps>) => {
  return (
    <Modal transparent visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {props.heading && (
            <BottomSheetHeader
              heading={props.heading}
              onCloseModal={props.onCloseModal}
              leadingIcon={props.headerLeadingIcon}
              onPressLeadingIcon={props.onPressLeadingIcon}
            />
          )}
          {props.addExtraHeaderMargin && <VerticalSpacer />}
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-end',
  },
  subContainer: {
    backgroundColor: colors.white,
    width: '100%',
    borderTopStartRadius: rFB(16),
    borderTopEndRadius: rFB(16),
  },
});

export default BottomSheet;
