import {IconProps, getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {StyleSheet, TouchableOpacity} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {IconType} from 'utils/types';

interface Props {
  icon: IconType;
  iconProps?: IconProps;
  onPress?: () => void;
  title: string;
}

const SmallTitleIconButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={props.onPress}>
      <AppText fontWeight="medium" style={[defaultStyles.body4]}>
        {props.title}
      </AppText>
      <HorizontalSpacer factor={2} />
      {getIcon(props.icon, props.iconProps)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: colors.grey6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: rw(12),
    paddingVertical: rh(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SmallTitleIconButton;
