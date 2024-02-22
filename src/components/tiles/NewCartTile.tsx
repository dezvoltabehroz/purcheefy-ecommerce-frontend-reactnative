import images from 'assets/images';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {CartTileProps} from 'utils/types';

const NewCartTile = (props: CartTileProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <ImageBackground source={images.cartTileBg} style={styles.container}>
        <View style={[defaultStyles.paddingHorizontal24]}>
          <AppText fontWeight="medium" style={[defaultStyles.textWhite]}>
            {props.title}
          </AppText>
          <VerticalSpacer factor={3} />
          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              defaultStyles.justifyContentSpBt,
            ]}>
            <AppText
              fontWeight="semiBold"
              style={[defaultStyles.textWhite, defaultStyles.h2]}>
              {props.value}
            </AppText>
            <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
              <AppText fontWeight="medium" style={[defaultStyles.textWhite]}>
                {strings.carts}:
              </AppText>
              <HorizontalSpacer factor={0.5} />
              <View style={styles.valueContainer}>
                <AppText fontWeight="semiBold" style={[defaultStyles.body3]}>
                  {props.cartCount}
                </AppText>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    resizeMode: 'cover',
    paddingVertical: rh(16),
    borderRadius: 20,
    overflow: 'hidden',
  },
  valueContainer: {
    paddingHorizontal: rw(8),
    paddingVertical: rh(2),
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: 3,
  },
});

export default NewCartTile;
