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

  return (
    <View style={[styles.container]}>
      <CircularIconButton icon="Menu" onPress={_handleOpenDrawer} />
      <CircularIconButton icon="NotificationActive" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
    backgroundColor: colors.white,
  },
});

export default DashboardAppbar;
