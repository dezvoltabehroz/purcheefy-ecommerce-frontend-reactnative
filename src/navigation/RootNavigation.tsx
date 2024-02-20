import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from 'utils/themes';
import MainStack from './MainStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={colors.transparent} />
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
