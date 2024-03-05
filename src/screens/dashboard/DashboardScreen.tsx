import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import SectionHeading from 'components/SectionHeading';
import VerticalSpacer from 'components/VerticalSpacer';
import DashboardAppbar from 'components/appbars/DashboardAppbar';
import SelectStoreSheet from 'components/bottom-sheets/SelectStoreSheet';
import SmallTitleIconButton from 'components/buttons/SmallTitleIconButton';
import SuccessModal from 'components/modals/SuccessModal';
import CartDetailTile from 'components/tiles/CartDetailTile';
import NewCartTile from 'components/tiles/NewCartTile';
import SimpleCartTile from 'components/tiles/SimpleCartTile';
import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {CartType, DashboardStackParamList} from 'utils/types';

const DashboardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(true);
  const [showSelectStoreSheet, setShowSelectStoreSheet] = useState(false);

  const _handleSubscriptionNavigation = () => {
    setShowSubscriptionModal(false);
    setTimeout(() => {
      navigation.navigate('AddCardScreen');
    }, 300);
  };

  const _handleCartListingNavigation = (cartType: CartType) => {
    navigation.navigate('CartListingScreen', {cartType});
  };

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <CartDetailTile
        key={index}
        containerStyle={defaultStyles.marginHorizontal24}
        onPress={() => navigation.navigate('CartDetailScreen')}
      />
    );
  };

  const _renderHeader = () => {
    return (
      <View style={defaultStyles.paddingHorizontal24}>
        <View
          style={[
            defaultStyles.row,
            defaultStyles.justifyContentSpBt,
            defaultStyles.alignItemsCenter,
          ]}>
          <View>
            <AppText fontWeight="semiBold" style={[defaultStyles.h2_5]}>
              Hamendra
            </AppText>
            <AppText
              style={[
                defaultStyles.body2,
                defaultStyles.textGrey1,
                defaultStyles.lessTextTopMargin,
              ]}>
              {strings.welcomeToSaleStack}
            </AppText>
          </View>
          <SmallTitleIconButton
            title={strings.chooseStore}
            icon="ChevronDown"
            iconProps={{width: rw(16), height: rh(10)}}
            onPress={() => setShowSelectStoreSheet(true)}
          />
        </View>
        <VerticalSpacer factor={2} />
        <NewCartTile
          title={strings.newCart}
          value="$3,578"
          cartCount={15000}
          onPress={() => _handleCartListingNavigation('Abandoned')}
        />
        <VerticalSpacer factor={2} />
        <SimpleCartTile
          title="Recovered Cart"
          value="$3,578"
          cartCount={5321}
          backgroundColor={colors.secondary}
          onPress={() => _handleCartListingNavigation('Recovered')}
        />
        <VerticalSpacer factor={2} />
        <SimpleCartTile
          title="Active Cart"
          value="$3,578"
          cartCount={5321}
          backgroundColor="rgba(249, 210, 36, 0.54)"
          onPress={() => _handleCartListingNavigation('Active')}
        />
        <VerticalSpacer factor={3} />
        <SectionHeading
          heading="Most Recent"
          trailingText="View All"
          onPressTrailing={() =>
            navigation.navigate('CartListingScreen', {cartType: 'Abandoned'})
          }
        />
        <VerticalSpacer />
      </View>
    );
  };

  return (
    <SafeAreaView style={[defaultStyles.bgWhite, defaultStyles.flex1]}>
      <View style={styles.padded}>
        <DashboardAppbar />
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
        ListFooterComponent={() => <VerticalSpacer factor={3} />}
      />
      <SuccessModal
        title="Your 7 day's free trial expire."
        description="When you archive a cart, it means that the shopper is not interested anymore."
        primaryButtonTitle="Subscribe Now"
        secondaryButtonTitle="Cancel"
        visible={showSubscriptionModal}
        onPressPrimaryButton={_handleSubscriptionNavigation}
        onClose={() => setShowSubscriptionModal(false)}>
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('Exclamation2', {width: rw(9), height: rw(38)})}
        </View>
      </SuccessModal>
      <SelectStoreSheet
        visible={showSelectStoreSheet}
        onCloseModal={() => setShowSelectStoreSheet(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  padded: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
  thumbContainer: {
    width: rw(62),
    height: rw(62),
    borderRadius: rw(62),
    backgroundColor: colors.primary,
    ...defaultStyles.center,
  },
});

export default DashboardScreen;
