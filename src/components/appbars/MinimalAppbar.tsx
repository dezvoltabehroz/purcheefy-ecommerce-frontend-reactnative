import {useNavigation} from '@react-navigation/native';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {FontWeight, IconType} from 'utils/types';

interface Props {
  leadingIcon?: IconType | undefined;
  onPressLeadingIcon?: () => void | undefined;
  title?: string;
  showBackIcon?: boolean;
  trailingIcon?: IconType;
  onPressTrailing?: () => void | undefined;
  withElevation?: boolean;
  trailingText?: string;
  trailingTextStyle?: StyleProp<TextStyle>;
  trailingTextFontWeight?: FontWeight;
  withBorder?: boolean;
}

const MinimalAppbar = ({
  leadingIcon,
  title,
  onPressLeadingIcon,
  showBackIcon = false,
  withElevation = false,
  withBorder = false,
  children,
  trailingIcon,
  onPressTrailing,
  trailingText,
  trailingTextStyle,
  trailingTextFontWeight = 'regular',
}: PropsWithChildren<Props>) => {
  const navigation = useNavigation();

  const _handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        withElevation && styles.elevation,
        withBorder && styles.border,
      ]}>
      {showBackIcon ? (
        <TouchableOpacity onPress={_handleBackPress} activeOpacity={0.8}>
          {getIcon('BackIcon', {
            width: 23,
            height: 23,
            fill: colors.black,
          })}
        </TouchableOpacity>
      ) : leadingIcon !== undefined ? (
        <TouchableOpacity onPress={onPressLeadingIcon}>
          {getIcon(leadingIcon, {width: 23, height: 23, fill: colors.black})}
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <HorizontalSpacer factor={2} />
      {children ?? (
        <AppText
          fontWeight="semiBold"
          style={[defaultStyles.textBlack, defaultStyles.h5, {top: 1.5}]}>
          {title}
        </AppText>
      )}
      {trailingIcon && (
        <TouchableOpacity
          onPress={onPressTrailing}
          style={styles.trailingContainer}>
          {getIcon(trailingIcon, {width: 18, height: 18, fill: colors.black})}
        </TouchableOpacity>
      )}
      {trailingText && (
        <TouchableOpacity
          style={styles.trailingContainer}
          activeOpacity={0.9}
          onPress={onPressTrailing}>
          <AppText
            fontWeight={trailingTextFontWeight}
            style={[
              defaultStyles.textPrimary,
              defaultStyles.body2,
              trailingTextStyle,
            ]}>
            {trailingText}
          </AppText>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: rw(16),
    paddingVertical: rh(16),
    backgroundColor: colors.white,
  },
  elevation: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  trailingContainer: {
    position: 'absolute',
    right: rw(16),
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black100,
  },
});

export default MinimalAppbar;
