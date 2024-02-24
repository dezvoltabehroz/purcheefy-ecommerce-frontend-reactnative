import {getIcon} from 'assets/icons';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import TextField from 'components/fields/TextField';
import CartDetailTile from 'components/tiles/CartDetailTile';
import {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface FormValues {
  searchQuery: string;
}

const CartListingScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    searchQuery: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _renderHeader = () => {
    return (
      <View
        style={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}>
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <View style={defaultStyles.flex1}>
            <TextField
              placeholder="Search here"
              name="searchQuery"
              value={formState.searchQuery}
              onChangeText={_handleChangeText}
              leadingIcon="Search"
            />
          </View>
          <HorizontalSpacer factor={1.5} />
          <TouchableOpacity style={[styles.filterButton]}>
            {getIcon('Filter', {width: rw(24), height: rw(24)})}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <CartDetailTile
        key={index}
        containerStyle={defaultStyles.marginHorizontal24}
      />
    );
  };

  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Active Carts" showBackIcon withElevation />
      <FlatList
        data={[1, 2, 3]}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
        ListFooterComponent={() => <VerticalSpacer factor={3} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: colors.primary,
    ...defaultStyles.center,
    width: rw(44),
    borderRadius: 8,
    paddingVertical: rh(11.5),
    top: 3,
  },
});

export default CartListingScreen;
