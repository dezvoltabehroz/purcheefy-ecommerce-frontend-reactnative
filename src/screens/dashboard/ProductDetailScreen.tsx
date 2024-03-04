import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import Divider from 'components/common/Divider';
import ReviewsSection from 'components/sections/ReviewsSection';
import {productsList} from 'data/dummyData';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rFB, rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

const sizes = ['S', 'M', 'L', 'XL', '2XL'];

const ProductDetailScreen = () => {
  const product = productsList[0];
  const [currentImage, setCurrentImage] = useState(
    product.images[0].toString(),
  );
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: '#FBFBFB'}]}>
      <MinimalAppbar title="Item Detail" showBackIcon withElevation />
      <ScrollView
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}>
        <Image
          source={product.images.find(d => d.toString() == currentImage)}
          style={styles.mainImage}
        />
        <VerticalSpacer factor={3} />
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <AppText
            style={[defaultStyles.flex1, defaultStyles.body3, styles.keyText]}>
            Women's Printed Heels
          </AppText>
          <AppText style={[defaultStyles.body3, styles.keyText]}>Price</AppText>
        </View>
        <VerticalSpacer />
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <AppText
            fontWeight="semiBold"
            style={[styles.title, defaultStyles.flex1]}>
            Nike Club Heels
          </AppText>
          <AppText fontWeight="semiBold" style={[styles.title]}>
            $99
          </AppText>
        </View>
        <VerticalSpacer factor={3} />
        <ScrollView horizontal>
          {product.images
            .filter(d => d.toString() !== currentImage.toString())
            .map(img => (
              <View key={img.toString()} style={defaultStyles.row}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.imgContainer}
                  onPress={() => setCurrentImage(img.toString())}>
                  <Image source={img} style={styles.img} />
                </TouchableOpacity>
                <HorizontalSpacer />
              </View>
            ))}
        </ScrollView>
        <VerticalSpacer factor={3} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText fontWeight="semiBold" style={styles.title2}>
            Size
          </AppText>
          <AppText style={[styles.keyText, styles.sizeGuide]}>
            Size Guide
          </AppText>
        </View>
        <VerticalSpacer />
        <ScrollView horizontal>
          {sizes.map(size => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.sizeButton}
              key={size}>
              <AppText fontWeight="semiBold" style={styles.title2}>
                {size}
              </AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <VerticalSpacer factor={3} />
        <AppText fontWeight="semiBold" style={[defaultStyles.h6]}>
          Description
        </AppText>
        <VerticalSpacer />
        <AppText
          style={[styles.description, defaultStyles.body2]}
          numberOfLines={showFullDescription ? undefined : 3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptates soluta amet officiis? Rem consequuntur doloribus ipsa, iste
          quibusdam quam dolorum, error dolores asperiores iure quaerat atque
          sint similique est?
        </AppText>
        <AppText
          fontWeight="semiBold"
          style={defaultStyles.body2}
          onPress={() => setShowFullDescription(st => !st)}>
          {showFullDescription ? 'Read Less' : 'Read More..'}
        </AppText>
        <VerticalSpacer factor={2.4} />
        <Divider />
        <VerticalSpacer factor={2.5} />
        <ReviewsSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    borderRadius: 16,
    width: '100%',
    height: rh(167),
  },
  keyText: {
    color: 'rgba(0, 0, 0, 0.35)',
  },
  title: {
    fontSize: rFB(22),
  },
  imgContainer: {
    width: rw(78),
    height: rh(77),
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title2: {
    fontSize: rFB(17),
  },
  sizeGuide: {
    fontSize: rFB(15),
  },
  sizeButton: {
    width: rw(60),
    height: rw(60),
    borderRadius: 10,
    backgroundColor: colors.grey6,
    ...defaultStyles.center,
    marginRight: rw(8),
  },
  description: {
    color: '#8F959E',
  },
});

export default ProductDetailScreen;
