import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';

interface FormValues {
  cardNumber: string;
  holderName: string;
  expiry: string;
  cvv: string;
}

const AddCardScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    cardNumber: '',
    holderName: '',
    expiry: '',
    cvv: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  return (
    <View style={[defaultStyles.flex1, defaultStyles.bgWhite]}>
      <MinimalAppbar title="Add Card" showBackIcon withElevation />
      <ScrollView
        style={[
          defaultStyles.paddingVertical24,
          defaultStyles.paddingHorizontal24,
        ]}>
        <TextField
          placeholder="0000   0000   0000    0000"
          name="cardNumber"
          value={formState.cardNumber}
          onChangeText={_handleChangeText}
          trailingIcon="Card"
          label="Card number"
        />
        <VerticalSpacer factor={3} />
        <TextField
          placeholder="ex. Jonathan Paul Ive"
          name="holderName"
          value={formState.holderName}
          onChangeText={_handleChangeText}
          label="Cardholder name"
        />
        <VerticalSpacer factor={3} />
        <View style={[defaultStyles.row]}>
          <View style={defaultStyles.flex1}>
            <TextField
              placeholder="MM   /   YYYY"
              name="expiry"
              value={formState.expiry}
              onChangeText={_handleChangeText}
              label="Expiry date"
            />
          </View>
          <HorizontalSpacer factor={3} />
          <View style={defaultStyles.flex1}>
            <TextField
              placeholder="3-4 digits"
              name="cvv"
              value={formState.cvv}
              onChangeText={_handleChangeText}
              label="CVV / CVC"
            />
          </View>
        </View>
        <VerticalSpacer factor={3} />
      </ScrollView>
    </View>
  );
};

export default AddCardScreen;
