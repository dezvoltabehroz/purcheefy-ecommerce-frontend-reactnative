import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import images from 'assets/images';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import BigButton from 'components/buttons/BigButton';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rFB} from 'utils/dimentions';
import {MainStackParamList} from 'utils/types';

const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const _handleLoginNavigation = () => {
    navigation.navigate('LoginScreen');
  };

  const _handleRegisterNavigation = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={[defaultStyles.flex1]}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image source={images.welcome} style={styles.image} />
      </View>
      <VerticalSpacer factor={4} />
      <View style={[defaultStyles.paddingHorizontal24, defaultStyles.center]}>
        <AppText
          fontWeight="bold"
          style={[defaultStyles.h4, defaultStyles.textAlignCenter]}>
          {strings.welcome}
        </AppText>
        <VerticalSpacer />
        <AppText
          style={[
            defaultStyles.textAlignCenter,
            defaultStyles.textGrey1,
            defaultStyles.body2,
            defaultStyles.paddingHorizontal16,
          ]}>
          {strings.looksLikeNoAccount}
        </AppText>
        <VerticalSpacer factor={3} />
        <BigButton title={strings.signup} onPress={_handleRegisterNavigation} />
        <VerticalSpacer factor={2} />
        <AppText
          fontWeight="light"
          style={[
            defaultStyles.textAlignCenter,
            defaultStyles.textBlack100,
            defaultStyles.body2,
          ]}>
          {strings.alreadyHaveAccount}{' '}
          <AppText
            onPress={_handleLoginNavigation}
            fontWeight="semiBold"
            style={[defaultStyles.textPrimary, defaultStyles.body2]}>
            {strings.login}
          </AppText>
        </AppText>
        <VerticalSpacer factor={2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderBottomLeftRadius: rFB(20),
    borderBottomRightRadius: rFB(20),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default OnboardingScreen;
