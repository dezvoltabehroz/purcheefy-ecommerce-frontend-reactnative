import {IconProps, getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {IconType} from 'utils/types';

interface Props {
  icon: IconType;
  iconProps?: IconProps;
  text: string;
  onPress?: () => void;
}

const IconTextButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={props.onPress}>
      <View style={styles.iconContainer}>
        {getIcon(props.icon, {width: rw(20), height: rh(20)})}
      </View>
      <HorizontalSpacer />
      <AppText
        fontWeight="medium"
        style={[defaultStyles.body3, {marginTop: 2}]}>
        {props.text}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 16,
    paddingHorizontal: rw(2),
    paddingVertical: rh(12),
  },
  iconContainer: {
    width: rw(32),
    height: rw(32),
    borderRadius: 34,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    ...defaultStyles.center,
  },
});

export default IconTextButton;
