import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';

interface FormValues {
  storeName: string;
  accessToken: string;
}

const AddStoreDetailsScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    storeName: '',
    accessToken: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Connect Shopify" showBackIcon withElevation />
      <View
        style={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}>
        <AppText fontWeight="semiBold" style={[defaultStyles.h5]}>
          Add Details
        </AppText>
        <VerticalSpacer factor={2} />
        <TextField
          placeholder="Store name"
          name="storeName"
          value={formState.storeName}
          onChangeText={_handleChangeText}
        />
        <VerticalSpacer factor={1.4} />
        <TextField
          placeholder="Access token"
          name="accessToken"
          value={formState.accessToken}
          onChangeText={_handleChangeText}
        />
        <VerticalSpacer factor={3} />
        <BigButton title={strings.submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddStoreDetailsScreen;
