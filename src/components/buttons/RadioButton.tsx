import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  leadingImage: ImageSourcePropType;
  title: string;
  selected?: boolean;
  onPress?: () => void;
}

const RadioButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[
        defaultStyles.row,
        defaultStyles.alignItemsCenter,
        styles.container,
        props.selected ? styles.selectedContainer : styles.unselectedContainer,
      ]}>
      <Image source={props.leadingImage} style={styles.image} />
      <HorizontalSpacer factor={2} />
      <View style={defaultStyles.flex1}>
        <AppText
          fontWeight="semiBold"
          style={[defaultStyles.h6, defaultStyles.textAlignLeft]}>
          {props.title}
        </AppText>
      </View>
      <View
        style={[
          styles.checkCircle,
          props.selected ? styles.selectedCircle : styles.unselectedCircle,
        ]}>
        {props.selected && <View style={styles.checkInner} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: rw(16),
    paddingVertical: rh(12),
  },
  selectedContainer: {
    borderColor: colors.primaryDark,
  },
  unselectedContainer: {
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  image: {
    width: rw(38),
    height: rw(38),
  },
  checkCircle: {
    width: rw(24),
    height: rw(24),
    borderRadius: rw(24),
    borderWidth: 3,
    ...defaultStyles.center,
  },
  unselectedCircle: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  selectedCircle: {
    borderColor: colors.primaryDark,
  },
  checkInner: {
    backgroundColor: colors.primaryDark,
    width: rw(13),
    height: rw(13),
    borderRadius: rw(13),
  },
});

export default RadioButton;
