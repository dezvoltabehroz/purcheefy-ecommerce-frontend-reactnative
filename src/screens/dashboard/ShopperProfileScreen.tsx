import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rFB, rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {DashboardStackParamList} from 'utils/types';

const ShopperProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const _renderItem = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('OrderDetailScreen')}
        style={[
          defaultStyles.row,
          defaultStyles.alignItemsCenter,
          defaultStyles.justifyContentSpBt,
          styles.itemContainer,
        ]}>
        <View style={defaultStyles.flex1}>
          <AppText style={styles.detailProperty}>
            Order Number #:{' '}
            <AppText style={[styles.detailProperty, defaultStyles.textBlack]}>
              654321
            </AppText>
          </AppText>
          <AppText style={styles.detailProperty}>
            Date:{' '}
            <AppText style={[styles.detailProperty, defaultStyles.textBlack]}>
              20/10/2021
            </AppText>
          </AppText>
        </View>
        <AppText fontWeight="bold" style={defaultStyles.body3}>
          $5,000
        </AppText>
      </TouchableOpacity>
    );
  };

  const _renderHeader = () => {
    return (
      <View>
        <AppText fontWeight="semiBold" style={[defaultStyles.h5]}>
          Profile Detail
        </AppText>
        <VerticalSpacer factor={2} />
        <View style={styles.profileDetailContainer}>
          <View style={[styles.detailItem, styles.borderBottom]}>
            <View
              style={[
                defaultStyles.row,
                defaultStyles.alignItemsCenter,
                defaultStyles.justifyContentSpBt,
              ]}>
              <AppText style={styles.detailProperty}>Full name</AppText>
              <AppText fontWeight="medium" style={defaultStyles.body3}>
                Jone Doe
              </AppText>
            </View>
          </View>
          <View style={[styles.detailItem, styles.borderBottom]}>
            <View
              style={[
                defaultStyles.row,
                defaultStyles.alignItemsCenter,
                defaultStyles.justifyContentSpBt,
              ]}>
              <AppText style={styles.detailProperty}>Email</AppText>
              <AppText fontWeight="medium" style={defaultStyles.body3}>
                Jane.doe@gmail.com
              </AppText>
            </View>
          </View>
          <View style={[styles.detailItem, styles.borderBottom]}>
            <View
              style={[
                defaultStyles.row,
                defaultStyles.alignItemsCenter,
                defaultStyles.justifyContentSpBt,
              ]}>
              <AppText style={styles.detailProperty}>Mobile</AppText>
              <AppText fontWeight="medium" style={defaultStyles.body3}>
                +92 351 123456
              </AppText>
            </View>
          </View>
          <View style={[styles.detailItem]}>
            <View style={[defaultStyles.row, defaultStyles.justifyContentSpBt]}>
              <AppText style={styles.detailProperty}>Shipping address</AppText>
              <AppText
                fontWeight="medium"
                style={[defaultStyles.body3, defaultStyles.textAlignRight]}>
                Mazaya Tower AA-1,{'\n'}
                Office 3207 - JLT, Dubai - UAE
              </AppText>
            </View>
          </View>
        </View>
        <VerticalSpacer factor={3} />
        <AppText fontWeight="semiBold" style={defaultStyles.h5}>
          History of purchases (5)
        </AppText>
        <VerticalSpacer factor={2} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText
            fontWeight="medium"
            style={[defaultStyles.body2, defaultStyles.textPrimary]}>
            Order
          </AppText>
          <AppText
            fontWeight="medium"
            style={[defaultStyles.body2, defaultStyles.textPrimary]}>
            Order value
          </AppText>
        </View>
        <VerticalSpacer factor={2} />
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: '#FBFBFB'}]}>
      <MinimalAppbar title="Shopper's profile" showBackIcon withElevation />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={_renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={() => <View style={styles.borderBottom} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: rh(24),
    paddingHorizontal: rw(24),
  },
  profileDetailContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  detailItem: {
    paddingHorizontal: rw(16),
    paddingVertical: rh(16),
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  detailProperty: {
    fontSize: rFB(11),
    color: 'rgba(0, 0, 0, 0.5)',
  },
  itemContainer: {
    paddingVertical: rh(18),
  },
});

export default ShopperProfileScreen;
