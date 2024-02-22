import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import AppText from './AppText';
import {colors} from 'utils/themes';

interface Props {
  heading: string;
  trailingText?: string;
  onPressTrailing?: () => void;
}
const SectionHeading = (props: Props) => {
  return (
    <View
      style={[
        defaultStyles.row,
        defaultStyles.alignItemsCenter,
        defaultStyles.justifyContentSpBt,
      ]}>
      <AppText fontWeight="semiBold" style={[defaultStyles.h6]}>
        {props.heading}
      </AppText>
      {props.trailingText && props.trailingText.length > 0 && (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPressTrailing}>
          <AppText style={[defaultStyles.textPrimary, styles.trailingText]}>
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
});

export default SectionHeading;
