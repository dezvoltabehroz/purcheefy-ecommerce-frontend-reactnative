import {getIcon} from 'assets/icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {StoreType} from 'utils/types';

interface Props {
  store: StoreType;
  onPress?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

const StoreCard = ({store, onPress, isActive, disabled}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        isActive && {
          backgroundColor: store.activeBgColor,
          borderColor: store.activeBorderColor,
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      {getIcon(isActive ? store.activeIcon : store.disabledIcon, {
        width: rw(120),
        height: rh(60),
      })}
      <View style={[styles.checkbox, isActive && styles.activeCheck]}>
        {isActive && getIcon('Tick', {width: rw(8), height: rw(8)})}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    paddingVertical: rh(33),
    ...defaultStyles.center,
  },
  checkbox: {
    position: 'absolute',
    top: rh(12),
    left: rw(12),
    width: rw(16),
    height: rw(16),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    ...defaultStyles.center,
  },
  activeCheck: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
  },
});

export default StoreCard;
