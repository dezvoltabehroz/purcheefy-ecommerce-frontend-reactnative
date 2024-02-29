import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  checked: boolean;
  text: string;
  onPress?: () => void;
}

const CheckBox = ({checked, text, onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[defaultStyles.row, defaultStyles.alignItemsCenter]}
      onPress={onPress}>
      <View
        style={[
          styles.checkBox,
          defaultStyles.center,
          checked && styles.checked,
        ]}>
        {checked && getIcon('Tick', {width: rw(10), height: rh(10)})}
      </View>
      <HorizontalSpacer factor={1.2} />
      <AppText style={[defaultStyles.body2, styles.text]}>{text}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: rw(16),
    height: rw(16),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  checked: {
    backgroundColor: colors.primary,
  },
  text: {
    color: '#9F9E9A',
    top: 1,
  },
});

export default CheckBox;
