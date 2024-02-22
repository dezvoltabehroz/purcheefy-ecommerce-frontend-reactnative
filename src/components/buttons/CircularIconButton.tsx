import {IconProps, getIcon} from 'assets/icons';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {IconType} from 'utils/types';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  icon: IconType;
  iconProps?: IconProps;
}

const CircularIconButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}>
      {getIcon(props.icon, props.iconProps)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: rw(46),
    height: rw(46),
    borderRadius: rw(46),
    backgroundColor: colors.grey6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircularIconButton;
