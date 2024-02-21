import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppText from '../AppText';
import {colors} from 'utils/themes';
import {rFB, rh} from 'utils/dimentions';
import defaultStyles from 'utils/defaultStyles';
import {FontWeight, IconType} from 'utils/types';
// import {IconProps, getIcon} from 'assets/icons';
import HorizontalSpacer from 'components/HorizontalSpacer';

interface Props {
  title: string;
  backgroundColor?: string;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void | undefined;
  showPrimaryBorder?: boolean;
  borderColor?: string;
  fontWeight?: FontWeight;
  icon?: IconType;
  // iconProps?: IconProps;
}

const BigButton = ({
  title,
  backgroundColor = colors.primary,
  color = colors.white,
  showPrimaryBorder = false,
  borderColor = colors.primary,
  onPress,
  fontWeight = 'semiBold',
  icon,
}: // iconProps,
Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        defaultStyles.center,
        showPrimaryBorder && {borderColor: borderColor, ...styles.borderred},
        {backgroundColor: backgroundColor},
      ]}>
      {/* {icon && (
        <>
          {getIcon(icon, iconProps)}
          <HorizontalSpacer factor={0.6} />
        </>
      )} */}
      <AppText fontWeight={fontWeight} style={{...styles.text, color: color}}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: rh(14),
    borderRadius: rFB(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderred: {
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  },
});

export default BigButton;
