import images from 'assets/images';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {CartTileProps} from 'utils/types';

const DetailedCartTile = (props: CartTileProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <ImageBackground source={images.cartTileBg} style={styles.container}>
        <View style={[defaultStyles.paddingHorizontal24]}>
          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              defaultStyles.justifyContentSpBt,
            ]}>
            <AppText
              fontWeight="bold"
              style={[defaultStyles.textWhite, defaultStyles.h4]}>
              {props.title}
            </AppText>
            <View style={styles.typeContainer}>
              <AppText fontWeight="semiBold" style={defaultStyles.body3Small}>
                {props.cartType}
              </AppText>
            </View>
          </View>
          {/* <VerticalSpacer factor={1.4} /> */}
          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              defaultStyles.justifyContentSpBt,
            ]}>
            <AppText
              fontWeight="medium"
              style={[defaultStyles.body3Small, styles.createdAtText]}>
              Created on:{' '}
              <AppText
                fontWeight="medium"
                style={[defaultStyles.body3Small, defaultStyles.textWhite]}>
                {props.createdAt}
              </AppText>
            </AppText>
            <AppText
              fontWeight="medium"
              style={[defaultStyles.body3Small, styles.createdAtText]}>
              Your attempts:{' '}
              <AppText
                fontWeight="semiBold"
                style={[defaultStyles.body3Small, defaultStyles.textWhite]}>
                {props.attemptsCount}
              </AppText>
            </AppText>
          </View>
          <VerticalSpacer factor={1.5} />
          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              defaultStyles.justifyContentSpBt,
            ]}>
            <View>
              <AppText
                fontWeight="medium"
                style={[defaultStyles.textWhite, defaultStyles.body3Small]}>
                Value
              </AppText>
              <View style={styles.typeContainer}>
                <AppText fontWeight="semiBold" style={defaultStyles.body}>
                  {props.value}
                </AppText>
              </View>
            </View>
            <View>
              <AppText
                fontWeight="medium"
                style={[defaultStyles.textWhite, defaultStyles.body3Small]}>
                Items
              </AppText>
              <View
                style={[
                  styles.typeContainer,
                  defaultStyles.bgTransparent,
                  defaultStyles.paddingHorizontal0,
                ]}>
                <AppText
                  fontWeight="semiBold"
                  style={[defaultStyles.body, defaultStyles.textWhite]}>
                  {`x${props.cartCount}`}
                </AppText>
              </View>
            </View>
            <View>
              <AppText
                fontWeight="medium"
                style={[defaultStyles.textWhite, defaultStyles.body3Small]}>
                Cart left since
              </AppText>
              <View
                style={[
                  styles.typeContainer,
                  defaultStyles.bgTransparent,
                  defaultStyles.paddingHorizontal0,
                ]}>
                <AppText
                  fontWeight="semiBold"
                  style={[defaultStyles.body, defaultStyles.textWhite]}>
                  {props.cartLeftSince}
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
  typeContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: rw(8),
    paddingTop: rh(2),
    borderRadius: 30,
  },
  createdAtText: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default DetailedCartTile;
