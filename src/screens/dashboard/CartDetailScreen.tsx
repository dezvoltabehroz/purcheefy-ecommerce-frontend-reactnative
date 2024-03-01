import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import HorizontalSpacer from 'components/HorizontalSpacer';
import SectionHeading from 'components/SectionHeading';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import IconTextButton from 'components/buttons/IconTextButton';
import SuccessModal from 'components/modals/SuccessModal';
import CartItemTile from 'components/tiles/CartItemTile';
import DetailedCartTile from 'components/tiles/DetailedCartTile';
import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {DashboardStackParamList} from 'utils/types';

const CartDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <CartItemTile
        key={index}
        containerStyle={defaultStyles.marginHorizontal18}
        // onPress={() => navigation.navigate('CartDetailScreen')}
      />
    );
  };

  const _renderHeader = () => {
    return (
      <View style={[defaultStyles.marginHorizontal18]}>
        <SectionHeading
          heading="Item(s) on Shopify"
          trailingText="Edit"
          onPressTrailing={() => navigation.navigate('EditCartScreen')}
        />
        <VerticalSpacer />
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1]}>
      <MinimalAppbar title="Cart Details" showBackIcon withElevation />
      <View style={styles.cardContainer}>
        <DetailedCartTile
          title="Jane doe"
          value="3,500,666"
          cartCount={5}
          cartType="Active"
          createdAt="20/01/2021"
          attemptsCount={1}
          cartLeftSince="5h"
        />
        <VerticalSpacer factor={2} />
        <View style={[defaultStyles.row]}>
          <IconTextButton icon="PersonFill" text="Shopper's profile" />
          <HorizontalSpacer factor={1.3} />
          <IconTextButton
            icon="NoteFill"
            text="Follow up notes"
            onPress={() => navigation.navigate('NotesListingScreen')}
          />
        </View>
      </View>
      <View
        style={[
          defaultStyles.flex1,
          defaultStyles.bgWhite,
          styles.listContainer,
        ]}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={_renderItem}
          style={defaultStyles.flex1}
          contentContainerStyle={styles.list}
          ListHeaderComponent={_renderHeader}
          ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
        />
        <VerticalSpacer />
        <View style={[defaultStyles.row, {paddingHorizontal: rw(18)}]}>
          <View style={defaultStyles.flex1}>
            <BigButton
              title="Archive it"
              backgroundColor="rgba(243, 112, 36, 0.15)"
              borderColor="rgba(243, 112, 36, 0.25)"
              showPrimaryBorder
              color={colors.primaryDark}
              onPress={() => setShowArchiveModal(true)}
            />
          </View>
          <HorizontalSpacer factor={1.5} />
          <View style={defaultStyles.flex1}>
            <BigButton title="Chat" />
          </View>
        </View>
        <VerticalSpacer />
      </View>
      <SuccessModal
        title="Are you sure you want to archive this cart?"
        description="When you archive a cart, it means that the shopper is not interested anymore."
        primaryButtonTitle="Archive it"
        secondaryButtonTitle="Cancel"
        visible={showArchiveModal}
        onClose={() => setShowArchiveModal(false)}>
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('ArchiveWhite', {width: rw(44), height: rw(44)})}
        </View>
      </SuccessModal>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: rw(18),
    paddingVertical: rh(18),
  },
  listContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  list: {
    paddingVertical: 24,
  },
  thumbContainer: {
    width: rw(78),
    height: rw(78),
    borderRadius: rw(78),
    backgroundColor: colors.primary,
    ...defaultStyles.center,
  },
});

export default CartDetailScreen;
