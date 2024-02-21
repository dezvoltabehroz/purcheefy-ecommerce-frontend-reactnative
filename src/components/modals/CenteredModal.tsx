import React, {PropsWithChildren} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rFB} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const CenteredModal = ({
  visible,
  onClose,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}
      onRequestClose={onClose}>
      <View style={[defaultStyles.flex1, defaultStyles.center, styles.modal]}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: colors.white,
    width: '80%',
    borderRadius: rFB(16),
  },
});

export default CenteredModal;
