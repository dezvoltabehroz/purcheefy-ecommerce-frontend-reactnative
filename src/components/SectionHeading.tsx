import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import AppText from './AppText';
import {colors} from 'utils/themes';
import {fontSizes, rh, rw} from 'utils/dimentions';
import HorizontalSpacer from './HorizontalSpacer';

interface Props {
  heading: string;
  trailingText?: string;
  onPressTrailing?: () => void;
  trailingTextStyle?: StyleProp<TextStyle>;
  badgeText?: string;
}
const SectionHeading = (props: Props) => {
  return (
    <View
      style={[
        defaultStyles.row,
        defaultStyles.alignItemsCenter,
        defaultStyles.justifyContentSpBt,
      ]}>
      <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
        <AppText fontWeight="semiBold" style={[defaultStyles.h6]}>
          {props.heading}
        </AppText>
        {props.badgeText && props.badgeText.length > 0 && (
          <>
            <HorizontalSpacer />
            <View style={styles.badge}>
              <AppText
                fontWeight="bold"
                style={[
                  defaultStyles.textWhite,
                  defaultStyles.textSmall,
                  styles.badgeText,
                ]}>
                {props.badgeText}
              </AppText>
            </View>
          </>
        )}
      </View>
      {props.trailingText && props.trailingText.length > 0 && (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPressTrailing}>
          <AppText
            style={[
              defaultStyles.textPrimary,
              styles.trailingText,
              props.trailingTextStyle,
            ]}>
            {props.trailingText}
          </AppText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  trailingText: {
    textDecorationLine: 'underline',
  },
  badge: {
    width: rw(16),
    height: rw(16),
    borderRadius: rw(16),
    ...defaultStyles.center,
    backgroundColor: colors.primary,
  },
  badgeText: {
    top: rh(1),
  },
});

export default SectionHeading;
