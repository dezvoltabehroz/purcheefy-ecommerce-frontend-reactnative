import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {SettingMenuItem} from 'utils/types';

interface Props {
  settingItem: SettingMenuItem;
}

const SettingTile = ({settingItem}: Props) => {
  return (
    <View
      style={[
        defaultStyles.row,
        defaultStyles.alignItemsCenter,
        styles.container,
      ]}>
      <View
        style={[styles.iconContainer, {backgroundColor: settingItem.bgColor}]}>
        {getIcon(settingItem.icon, {width: rw(22), height: rw(22)})}
      </View>
      <HorizontalSpacer factor={1.5} />
      <View style={defaultStyles.flex1}>
        <AppText style={defaultStyles.h6}>{settingItem.title}</AppText>
      </View>
      {getIcon('ChevronLeft', {width: rw(16), scaleX: -1})}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: rh(12),
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  iconContainer: {
    width: rw(32),
    height: rw(32),
    borderRadius: 6,
    ...defaultStyles.center,
  },
});

export default SettingTile;
