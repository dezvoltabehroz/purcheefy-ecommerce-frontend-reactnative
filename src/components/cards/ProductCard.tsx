import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rh, rw} from 'utils/dimentions';
import {Product} from 'utils/types';

interface Props {
  product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[defaultStyles.width100, styles.container]}>
      <Image source={product.images[0]} style={styles.image} />
      <View style={styles.productDescriptionContainer}>
        <AppText
          numberOfLines={1}
          fontWeight="medium"
          style={defaultStyles.body3}>
          {product.title}
        </AppText>
        <AppText fontWeight="light" numberOfLines={1} style={styles.desc}>
          {product.description}
        </AppText>
        <VerticalSpacer factor={1.4} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText
            fontWeight="semiBold"
            style={[defaultStyles.textPrimary, defaultStyles.body3]}>
            {product.price}
          </AppText>
          <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
            {getIcon('PlusBlack', {width: rw(16), height: rh(16)})}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 165,
  },
  productDescriptionContainer: {
    paddingVertical: rh(10),
    paddingHorizontal: rw(10),
  },
  desc: {
    color: '#272727',
    fontSize: fontSizes.body3Small,
  },
  addButton: {
    width: rw(16),
    height: rw(16),
    borderRadius: 18,
    ...defaultStyles.center,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ProductCard;
