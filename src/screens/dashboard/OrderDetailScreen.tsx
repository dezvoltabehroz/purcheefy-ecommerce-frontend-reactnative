import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import ProductTile from 'components/tiles/ProductTile';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';

const OrderDetailScreen = () => {
  const _renderHeader = () => {
    return (
      <View>
        <AppText fontWeight="semiBold" style={[defaultStyles.h5]}>
          Order placed on 20/10/2021{' '}
        </AppText>
        <VerticalSpacer factor={2} />
      </View>
    );
  };

  const _renderItem = () => {
    return <ProductTile />;
  };

  const _renderFooter = () => {
    return (
      <View>
        <VerticalSpacer factor={3} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
            styles.borderBottom,
            styles.summaryItem,
          ]}>
          <AppText style={[defaultStyles.body3Small]}>Subtotal</AppText>
          <AppText style={[defaultStyles.body3Small]}>$5000</AppText>
        </View>
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
            styles.borderBottom,
            styles.summaryItem,
          ]}>
          <AppText style={[defaultStyles.body3Small, styles.textGrey]}>
            Shipping
          </AppText>
          <AppText style={[defaultStyles.body3Small, styles.textGrey]}>
            $99
          </AppText>
        </View>
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
            styles.summaryItem,
          ]}>
          <AppText fontWeight="bold" style={[defaultStyles.body3Small]}>
            Total{'\n'}
            <AppText style={[defaultStyles.body4, styles.textGrey]}>
              (Inclusive of VAT)
            </AppText>
          </AppText>
          <AppText
            fontWeight="bold"
            style={[defaultStyles.body3Small, defaultStyles.textPrimary]}>
            $5099
          </AppText>
        </View>
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: '#FBFBFB'}]}>
      <MinimalAppbar title="Order #:654321" showBackIcon withElevation />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={_renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={() => <VerticalSpacer factor={2} />}
        ListFooterComponent={_renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: rh(24),
    paddingHorizontal: rw(24),
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  summaryItem: {
    paddingVertical: rh(6),
  },
  textGrey: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default OrderDetailScreen;
