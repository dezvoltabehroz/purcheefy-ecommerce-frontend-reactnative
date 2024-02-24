import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import StoreCard from 'components/cards/StoreCard';
import {storesList} from 'data/data';
import {useState} from 'react';
import {FlatList, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {DashboardStackParamList, StoreType} from 'utils/types';

const StoresListingScreen = () => {
  const [selectedStoreId, setSelectedStoreId] = useState<string | undefined>();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const _handleItemPressed = (storeId: string) => {
    setSelectedStoreId(storeId);
    setTimeout(() => {
      setSelectedStoreId(undefined);
      navigation.navigate('AddStoreDetailsScreen');
    }, 300);
  };

  const _renderStoreItem = ({item}: {item: StoreType}) => {
    return (
      <View style={{width: '48%'}} key={item.id}>
        <StoreCard
          store={item}
          isActive={item.id == selectedStoreId}
          disabled={selectedStoreId != undefined}
          onPress={() => _handleItemPressed(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Connect store" showBackIcon withElevation />
      <FlatList
        style={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}
        data={storesList}
        renderItem={_renderStoreItem}
        numColumns={2}
        columnWrapperStyle={defaultStyles.justifyContentSpBt}
        ItemSeparatorComponent={() => <VerticalSpacer factor={1.6} />}
      />
    </View>
  );
};

export default StoresListingScreen;
