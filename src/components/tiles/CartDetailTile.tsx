import images from 'assets/images';
import AppText from 'components/AppText';
import KeyValueCol from 'components/common/KeyValueCol';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CartDetailTile = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}>
      <Image source={images.product} style={styles.image} />
      <View style={[defaultStyles.flex1]}>
        <AppText fontWeight="medium" style={[defaultStyles.h6]}>
          John Doe
        </AppText>
        <View
          style={[
            defaultStyles.row,
            defaultStyles.justifyContentSpBt,
            defaultStyles.alignItemsCenter,
          ]}>
          <KeyValueCol keyStr="Value" value="3,500" />
          <AppText style={defaultStyles.textPrimary}>-</AppText>
          <KeyValueCol keyStr="Items" value="x5" />
          <AppText style={defaultStyles.textPrimary}>-</AppText>
          <KeyValueCol keyStr="Cart left since" value="5h" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(8),
    paddingVertical: rh(4),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: rw(80),
    height: rh(76),
    resizeMode: 'contain',
  },
});

export default CartDetailTile;
