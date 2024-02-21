import {PropsWithChildren} from 'react';
import CenteredModal from './CenteredModal';
import VerticalSpacer from 'components/VerticalSpacer';
import {StyleSheet, View} from 'react-native';
import {rh, rw} from 'utils/dimentions';
import defaultStyles from 'utils/defaultStyles';
import AppText from 'components/AppText';
import {strings} from 'utils/constants';
import BigButton from 'components/buttons/BigButton';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const SuccessModal = ({
  visible,
  onClose,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <CenteredModal visible={visible} onClose={onClose}>
      <VerticalSpacer factor={2} />
      {children}
      <View style={[styles.container, defaultStyles.center]}>
        <AppText fontWeight="bold" style={[defaultStyles.h6]}>
          {strings.passwordUpdated}
        </AppText>
        <VerticalSpacer factor={0.5} />
        <AppText style={[defaultStyles.textGrey4]}>
          {strings.pressLogin}
        </AppText>
        <VerticalSpacer factor={2} />
        <BigButton title={strings.login} onPress={onClose} />
      </View>
    </CenteredModal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(32),
    paddingVertical: rh(24),
  },
});

export default SuccessModal;
