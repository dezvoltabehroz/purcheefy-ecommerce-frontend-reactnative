import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {Notification} from 'utils/types';

interface Props {
  notification: Notification;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const NotificationTile = ({notification, onPress, containerStyle}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.iconContainer,
          notification.type == 'In-App'
            ? styles.appIconContainer
            : styles.cartIconContainer,
        ]}>
        {getIcon(notification.type == 'In-App' ? 'Logo' : 'Cart2', {
          width: notification.type == 'In-App' ? rw(16) : rw(22),
        })}
      </View>
      <HorizontalSpacer factor={1.6} />
      <View style={[defaultStyles.flex1]}>
        <AppText fontWeight="semiBold" style={[defaultStyles.body2]}>
          {notification.title}
        </AppText>
        <AppText style={[defaultStyles.body3Small]}>
          {notification.description}
        </AppText>
        <VerticalSpacer />
        <AppText style={[defaultStyles.textSmall, styles.time]}>
          {notification.time}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    paddingHorizontal: rw(12),
    paddingVertical: rh(12),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: rw(44),
    height: rw(44),
    borderRadius: rw(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconContainer: {
    backgroundColor: 'rgba(243, 112, 36, 0.15)',
    borderColor: 'rgba(243, 112, 36, 0.24)',
  },
  cartIconContainer: {
    backgroundColor: '#FF3B3B',
    borderColor: '#FF3B3B',
  },
  time: {
    color: '#A7A9B7',
  },
});

export default NotificationTile;
