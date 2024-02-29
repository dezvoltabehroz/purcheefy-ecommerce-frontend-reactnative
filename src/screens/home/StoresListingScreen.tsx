import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {getIcon} from 'assets/icons';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import StoreCard from 'components/cards/StoreCard';
import SuccessModal from 'components/modals/SuccessModal';
import {storesList} from 'data/data';
import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {DashboardStackParamList, StoreType} from 'utils/types';

const StoresListingScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState<string | undefined>();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const _handleItemPressed = (storeId: string) => {
    setSelectedStoreId(storeId);
    setTimeout(() => {
      setSelectedStoreId(undefined);
      if (storeId == '1') {
        navigation.navigate('AddStoreDetailsScreen');
      } else {
        setShowModal(true);
      }
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
      <SuccessModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        secondaryButtonTitle="Cancel"
        title="Coming Soon!"
        description="Launching soon to connect with other stores - stay tuned for updates!">
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('Exclamation2')}
        </View>
      </SuccessModal>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    width: rw(62),
    height: rw(62),
    borderRadius: rw(62),
    backgroundColor: colors.primary,
  },
});

export default StoresListingScreen;
