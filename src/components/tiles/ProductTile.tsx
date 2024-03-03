import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rh, rw} from 'utils/dimentions';

const ProductTile = () => {
  return (
    <View style={styles.container}>
      <AppText fontWeight="light" style={styles.title}>
        High heels BLACK - JIMMY CHOO
      </AppText>
      <VerticalSpacer />
      <View
        style={[
          defaultStyles.row,
          defaultStyles.alignItemsCenter,
          defaultStyles.justifyContentSpBt,
        ]}>
        <View>
          <AppText style={styles.keyStr}>Items</AppText>
          <AppText fontWeight="bold" style={defaultStyles.body2}>
            x5
          </AppText>
        </View>
        <View>
          <AppText style={styles.keyStr}>Value</AppText>
          <AppText fontWeight="bold" style={defaultStyles.body2}>
            $1000
          </AppText>
        </View>
        <View>
          <AppText style={styles.keyStr}>Total</AppText>
          <AppText
            fontWeight="bold"
            style={[defaultStyles.body2, defaultStyles.textPrimary]}>
            $1000
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 16,
    paddingHorizontal: rw(16),
    paddingVertical: rh(16),
  },
  title: {
    fontSize: fontSizes.body2,
    color: '#1D1E20',
  },
  keyStr: {
    color: 'rgba(0, 0, 0, 0.35)',
    fontSize: fontSizes.body4,
  },
});

export default ProductTile;
