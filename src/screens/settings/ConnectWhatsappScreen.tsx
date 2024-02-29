import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface FormValues {
  phone: string;
}

const ConnectWhatsappScreen = () => {
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('PK');
  const [country, setCountry] = useState<Country>();

  const [formState, setFormState] = useState<FormValues>({
    phone: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="WhatsApp Number" showBackIcon withElevation />
      <ScrollView style={defaultStyles.paddingHorizontal24}>
        <VerticalSpacer factor={6} />
        <View style={defaultStyles.center}>
          {getIcon('WhatsappBlack', {width: rw(60), height: rw(60)})}
          <VerticalSpacer />
          <AppText
            fontWeight="semiBold"
            style={[defaultStyles.textAlignCenter, defaultStyles.h5]}>
            Add your whatsapp number!
          </AppText>
          <AppText
            style={[
              defaultStyles.textAlignCenter,
              defaultStyles.body3Small,
              styles.subheading,
            ]}>
            Your phone number has been linked to your account. you can add and
            change number below.{' '}
          </AppText>
          <VerticalSpacer factor={3} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => setShowCountryPicker(true)}>
            <CountryPicker
              countryCode={countryCode}
              visible={showCountryPicker}
              onClose={() => setShowCountryPicker(false)}
              onSelect={val => {
                setCountry(val);
                setCountryCode(val.cca2);
              }}
            />
            <View style={defaultStyles.flex1}>
              <AppText style={[defaultStyles.h6]}>
                {country?.name !== undefined
                  ? country.name.toString()
                  : 'Pakistan'}{' '}
                (+{country?.callingCode ?? '92'} )
              </AppText>
            </View>
            {getIcon('ChevronDown2', {width: rw(20), height: rh(20)})}
          </TouchableOpacity>
          <VerticalSpacer factor={2} />
          <TextField
            placeholder="Enter phone number"
            name="phone"
            value={formState.phone}
            onChangeText={_handleChangeText}
            leadingIcon="Telephone"
          />
          <VerticalSpacer factor={3} />
          <BigButton title="Add" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    backgroundColor: colors.grey3,
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingHorizontal: rw(8),
    height: rh(56),
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // top: 1,
  },
});

export default ConnectWhatsappScreen;
