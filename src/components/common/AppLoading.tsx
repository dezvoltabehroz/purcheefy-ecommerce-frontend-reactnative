import images from 'assets/images';
import {Image, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';

const AppLoading = () => {
  return (
    <View style={[defaultStyles.flex1, defaultStyles.center]}>
      <Image source={images.loading} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default AppLoading;
