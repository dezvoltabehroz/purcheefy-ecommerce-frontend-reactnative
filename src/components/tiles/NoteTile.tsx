import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import Divider from 'components/common/Divider';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  showMenuView?: boolean;
  onPressMenuButton?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

const NoteTile = ({
  showMenuView,
  onPressMenuButton,
  onPressDelete,
  onPressEdit,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={defaultStyles.flex1}>
        <AppText
          numberOfLines={1}
          fontWeight="semiBold"
          style={defaultStyles.body2}>
          Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text
          of
        </AppText>
        <VerticalSpacer factor={0.4} />
        <AppText
          numberOfLines={2}
          style={[styles.description, defaultStyles.body3Small]}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has typesetting industry...
        </AppText>
      </View>
      <HorizontalSpacer factor={2} />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPressMenuButton}
        style={styles.menuButton}>
        {getIcon('MenuDots', {width: 4, height: 22})}
      </TouchableOpacity>
      {showMenuView && (
        <View style={styles.editContainer}>
          <TouchableOpacity
            onPress={onPressEdit}
            activeOpacity={0.8}
            style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
            <View style={[styles.editCircle, styles.editOptionCircle]}>
              {getIcon('Edit', {width: rw(16), height: rw(16)})}
            </View>
            <HorizontalSpacer />
            <AppText style={styles.editText}>Edit</AppText>
          </TouchableOpacity>
          <VerticalSpacer factor={0.4} />
          <Divider />
          <VerticalSpacer factor={0.4} />

          <TouchableOpacity
            onPress={onPressDelete}
            activeOpacity={0.8}
            style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
            <View style={[styles.editCircle, styles.deleteCircle]}>
              {getIcon('DeleteWhite', {width: rw(17), height: rw(17)})}
            </View>
            <HorizontalSpacer />
            <AppText style={styles.editText}>Delete</AppText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: rh(16),
    paddingLeft: rw(16),
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    paddingHorizontal: rw(16),
  },
  description: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
  editContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    paddingVertical: rh(8),
    paddingHorizontal: rw(8),
    backgroundColor: colors.white,
    zIndex: 100,
    borderRadius: 8,
  },
  editCircle: {
    width: rw(26),
    height: rw(26),
    borderRadius: rw(26),
    ...defaultStyles.center,
  },
  deleteCircle: {
    backgroundColor: colors.primary,
  },
  editOptionCircle: {
    backgroundColor: '#4C61EB',
  },
  editText: {
    fontSize: fontSizes.body2,
    top: 1.5,
  },
});

export default NoteTile;
