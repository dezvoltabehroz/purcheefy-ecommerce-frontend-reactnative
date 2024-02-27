import HorizontalSpacer from 'components/HorizontalSpacer';
import SectionHeading from 'components/SectionHeading';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import IconTextButton from 'components/buttons/IconTextButton';
import CartItemTile from 'components/tiles/CartItemTile';
import DetailedCartTile from 'components/tiles/DetailedCartTile';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

const CartDetailScreen = () => {
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
        <SectionHeading heading="Item(s) on Shopify" trailingText="Edit" />
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
          <IconTextButton icon="NoteFill" text="Follow up notes" />
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
            />
          </View>
          <HorizontalSpacer factor={1.5} />
          <View style={defaultStyles.flex1}>
            <BigButton title="Chat" />
          </View>
        </View>
        <VerticalSpacer />
      </View>
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
});

export default CartDetailScreen;
