import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {FlatList, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {colors} from 'utils/themes';

interface FormValues {
  searchQuery: string;
}

const ProductsListingScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    searchQuery: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _renderItem = () => {
    return <></>;
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
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: colors.white2}]}>
      <MinimalAppbar title="Add Item" showBackIcon withElevation />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={_renderItem}
        style={defaultStyles.flex1}
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}
        ListHeaderComponent={_renderHeader}
        // ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
      />
    </View>
  );
};

export default ProductsListingScreen;
