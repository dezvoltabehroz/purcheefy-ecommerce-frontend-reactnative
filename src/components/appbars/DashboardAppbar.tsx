import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import CircularIconButton from 'components/buttons/CircularIconButton';
import {StyleSheet, View} from 'react-native';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {MainDrawerParamList} from 'utils/types';

const DashboardAppbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainDrawerParamList>>();

  const _handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  const _handleNotificationNavigation = () => {
    navigation.navigate('NotificationsListingScreen');
  };

  return (
    <View style={[styles.container]}>
      <CircularIconButton icon="Menu" onPress={_handleOpenDrawer} />
      <CircularIconButton
        icon="NotificationActive"
        onPress={_handleNotificationNavigation}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
});

export default DashboardAppbar;
