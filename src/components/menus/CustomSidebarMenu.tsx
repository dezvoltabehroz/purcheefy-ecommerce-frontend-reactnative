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
import {MainDrawerParamList} from 'utils/types';
import {DrawerActions} from '@react-navigation/native';
import {Switch} from 'react-native-gesture-handler';
import {colors} from 'utils/themes';
import {useState} from 'react';

const CustomSidebarMenu = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<DrawerNavigationProp<MainDrawerParamList>>();
  const [notifications, setNotifications] = useState(false);

  const _handleCloseDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const _handleItemPressed = (id: string) => {
    if (id == '8') {
      _handleCloseDrawer();
      navigation.navigate('SettingStack');
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
});

export default CustomSidebarMenu;
