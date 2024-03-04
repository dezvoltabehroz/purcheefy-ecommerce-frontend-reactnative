import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import ProductCard from 'components/cards/ProductCard';
import TextField from 'components/fields/TextField';
import {productsList} from 'data/dummyData';
import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {DashboardStackParamList, Product} from 'utils/types';

interface FormValues {
  searchQuery: string;
}

const ProductsListingScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    searchQuery: '',
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _handleProductDetailNavigation = () => {
    navigation.navigate('ProductDetailScreen');
  };

  const _renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <View
        style={[
          styles.productItemContainer,
          index % 2 == 0 ? styles.marginRight : styles.marginLeft,
        ]}>
        <ProductCard product={item} onPress={_handleProductDetailNavigation} />
      </View>
    );
  };

  const _renderHeader = () => {
    return (
      <View>
        <TextField
          placeholder="Search products here"
          name="searchQuery"
          value={formState.searchQuery}
          onChangeText={_handleChangeText}
          leadingIcon="Search"
        />
        <VerticalSpacer factor={3} />
        <AppText fontWeight="semiBold" style={defaultStyles.h6}>
          Item(s) List
        </AppText>
        <VerticalSpacer />
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: colors.white2}]}>
      <MinimalAppbar title="Add Item" showBackIcon withElevation />
      <FlatList
        data={productsList}
        renderItem={_renderItem}
        style={defaultStyles.flex1}
        numColumns={2}
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}
        ItemSeparatorComponent={() => <VerticalSpacer factor={2} />}
        ListHeaderComponent={_renderHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productItemContainer: {
    flex: 1,
  },
  marginRight: {
    marginRight: rw(6),
  },
  marginLeft: {
    marginLeft: rw(6),
  },
});

export default ProductsListingScreen;
