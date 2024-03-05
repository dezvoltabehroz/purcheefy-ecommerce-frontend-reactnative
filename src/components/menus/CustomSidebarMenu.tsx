import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import CircularIconButton from 'components/buttons/CircularIconButton';
import ProfileInfoTile from 'components/tiles/ProfileInfoTile';
import {drawerOptions} from 'data/data';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {CartType, MainDrawerParamList} from 'utils/types';
import {DrawerActions} from '@react-navigation/native';
import {Switch} from 'react-native-gesture-handler';
import {colors} from 'utils/themes';
import {useState} from 'react';
import BigButton from 'components/buttons/BigButton';
import SuccessModal from 'components/modals/SuccessModal';

const CustomSidebarMenu = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<DrawerNavigationProp<MainDrawerParamList>>();
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const _handleCloseDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const _handleItemPressed = (id: string) => {
    _handleCloseDrawer();
    switch (id) {
      case '8':
        navigation.navigate('SettingStack');
        break;
      case '3':
        navigation.navigate('DashboardStack', {screen: 'StoresListingScreen'});
        break;
      case '4':
      case '5':
      case '6':
        let cartType: CartType = 'Abandoned';
        if (id == '5') {
          cartType = 'Recovered';
        } else if (id == '6') {
          cartType = 'Archive';
        }
        navigation.navigate('DashboardStack', {
          screen: 'CartListingScreen',
          params: {cartType},
        });
        break;
      case '7':
        setShowDeleteAccountModal(true);
        break;
    }
  };

  return (
    <SafeAreaView style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <DrawerContentScrollView style={styles.container}>
        <CircularIconButton icon="MenuVertical" onPress={_handleCloseDrawer} />
        <VerticalSpacer factor={3} />
        <ProfileInfoTile />
        <VerticalSpacer factor={3} />
        {drawerOptions.map(option => (
          <View key={option.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.optionContainer}
              onPress={() => _handleItemPressed(option.id)}>
              {getIcon(option.icon)}
              <HorizontalSpacer factor={1.5} />
              <AppText>{option.title}</AppText>
              {option.id == '1' && (
                <>
                  <View style={defaultStyles.flex1} />
                  <Switch
                    trackColor={{false: '#D6D6D6', true: colors.primary}}
                    thumbColor={colors.white}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setNotifications(st => !st)}
                    value={notifications}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        ))}
        <VerticalSpacer />
        <BigButton title="Subscribe Now" />
      </DrawerContentScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.optionContainer, styles.container]}>
        {getIcon('Logout')}
        <HorizontalSpacer factor={1.5} />
        <AppText fontWeight="medium" style={defaultStyles.textRed}>
          {strings.logout}
        </AppText>
      </TouchableOpacity>
      <VerticalSpacer factor={2} />
      <SuccessModal
        title="Are you sure you want to Delete your account?"
        description="When you archive a cart, it means that the shopper is not interested anymore."
        primaryButtonTitle="Yes"
        secondaryButtonTitle="Cancel"
        visible={showDeleteAccountModal}
        onClose={() => setShowDeleteAccountModal(false)}>
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('DeleteWhite', {width: rw(44), height: rw(44)})}
        </View>
      </SuccessModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingStart: rw(24),
    paddingEnd: rw(16),
  },
  optionContainer: {
    paddingVertical: rh(10),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  thumbContainer: {
    width: rw(78),
    height: rw(78),
    borderRadius: rw(78),
    backgroundColor: '#FF0000',
    ...defaultStyles.center,
  },
});

export default CustomSidebarMenu;
