import {PropsWithChildren} from 'react';
import CenteredModal from './CenteredModal';
import VerticalSpacer from 'components/VerticalSpacer';
import {StyleSheet, View} from 'react-native';
import {rh, rw} from 'utils/dimentions';
import defaultStyles from 'utils/defaultStyles';
import AppText from 'components/AppText';
import {strings} from 'utils/constants';
import BigButton from 'components/buttons/BigButton';
import {colors} from 'utils/themes';

interface Props {
  visible: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
}

const SuccessModal = ({
  visible,
  onClose,
  children,
  title = strings.passwordUpdated,
  description = strings.pressLogin,
  primaryButtonTitle = strings.login,
  secondaryButtonTitle,
}: PropsWithChildren<Props>) => {
  return (
    <CenteredModal visible={visible} onClose={onClose}>
      <VerticalSpacer factor={2} />
      {children}
      <View style={[styles.container, defaultStyles.center]}>
        <AppText
          fontWeight="bold"
          style={[defaultStyles.h6, defaultStyles.textAlignCenter]}>
          {title}
        </AppText>
        <VerticalSpacer factor={0.5} />
        <AppText
          style={[defaultStyles.textGrey4, defaultStyles.textAlignCenter]}>
          {description}
        </AppText>
        <VerticalSpacer factor={2} />
        <BigButton title={primaryButtonTitle} onPress={onClose} />
        {secondaryButtonTitle && secondaryButtonTitle.length > 0 && (
          <>
            <VerticalSpacer factor={1.5} />
            <BigButton
              title={secondaryButtonTitle}
              backgroundColor="rgba(243, 112, 36, 0.15)"
              borderColor="rgba(243, 112, 36, 0.25)"
              showPrimaryBorder
              color={colors.primaryDark}
              onPress={onClose}
            />
          </>
        )}
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
