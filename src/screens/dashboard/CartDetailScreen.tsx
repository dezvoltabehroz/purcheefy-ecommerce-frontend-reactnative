import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import IconTextButton from 'components/buttons/IconTextButton';
import DetailedCartTile from 'components/tiles/DetailedCartTile';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';

const CartDetailScreen = () => {
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
});

export default CartDetailScreen;
