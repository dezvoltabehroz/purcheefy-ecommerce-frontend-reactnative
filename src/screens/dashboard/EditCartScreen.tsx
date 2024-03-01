import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import Divider from 'components/common/Divider';
import TextField from 'components/fields/TextField';
import CartItemTile from 'components/tiles/CartItemTile';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {DashboardStackParamList} from 'utils/types';

interface FormValues {
  message: string;
}

const EditCartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const [formState, setFormState] = useState<FormValues>({
    message: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return <CartItemTile key={index} showExtra />;
  };

  const _renderHeader = () => {
    return (
      <>
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText fontWeight="bold" style={[defaultStyles.h6]}>
            Item(s) on Shopify
          </AppText>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('ProductsListingScreen')}>
            <AppText style={[defaultStyles.textWhite, defaultStyles.textSmall]}>
              Add Item
            </AppText>
          </TouchableOpacity>
        </View>
        <VerticalSpacer factor={1.6} />
      </>
    );
  };

  const _renderFooter = () => {
    return (
      <View>
        <VerticalSpacer factor={2.4} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText fontWeight="semiBold">Subtotal</AppText>
          <AppText fontWeight="semiBold">$674</AppText>
        </View>
        <VerticalSpacer factor={0.5} />
        <Divider />
        <VerticalSpacer factor={0.5} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText style={styles.text}>Delivery (estimated)</AppText>
          <AppText fontWeight="semiBold" style={styles.text}>
            $0
          </AppText>
        </View>
        <VerticalSpacer factor={0.5} />
        <Divider />
        <VerticalSpacer factor={0.5} />
        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpBt,
          ]}>
          <AppText style={styles.text}>Tax / (VAT 15%)</AppText>
          <AppText fontWeight="semiBold" style={styles.text}>
            $1.50
          </AppText>
        </View>
        <VerticalSpacer factor={0.5} />
        <Divider />
        <VerticalSpacer factor={4} />
        <AppText fontWeight="bold" style={defaultStyles.h6}>
          You can add message here!
        </AppText>
        <TextField
          placeholder="Enter a note here"
          name="message"
          value={formState.message}
          onChangeText={_handleChangeText}
          numberOfLines={5}
        />
        <VerticalSpacer factor={1.4} />
        <BigButton
          title="Generate Ai Message"
          backgroundColor="rgba(243, 112, 36, 0.15)"
          showPrimaryBorder
          borderColor="#F3702440"
          color={colors.primaryDark}
        />
        <VerticalSpacer factor={2} />
        <Divider text="Share" />
        <VerticalSpacer factor={2} />

        <View
          style={[
            defaultStyles.row,
            defaultStyles.alignItemsCenter,
            defaultStyles.justifyContentSpEv,
          ]}>
          {getIcon('WhatsappShare', {width: rw(50), height: rw(50)})}
          {getIcon('MailShare', {width: rw(50), height: rw(50)})}
          {getIcon('LinkShare', {width: rw(50), height: rw(50)})}
          {getIcon('MoreShare', {width: rw(50), height: rw(50)})}
        </View>
        <VerticalSpacer />
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: colors.white2}]}>
      <MinimalAppbar title="Cart Details" showBackIcon withElevation />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={_renderItem}
        style={defaultStyles.flex1}
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}
        ListHeaderComponent={_renderHeader}
        ListFooterComponent={_renderFooter}
        ItemSeparatorComponent={() => <VerticalSpacer factor={1.5} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingHorizontal: rw(12),
    paddingVertical: rh(4),
  },
  text: {
    color: '#00000080',
    fontSize: fontSizes.body3,
  },
});

export default EditCartScreen;
