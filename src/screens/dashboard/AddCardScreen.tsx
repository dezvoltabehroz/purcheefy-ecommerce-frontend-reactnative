import {getIcon} from 'assets/icons';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import CheckBox from 'components/fields/CheckBox';
import TextField from 'components/fields/TextField';
import SuccessModal from 'components/modals/SuccessModal';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';

interface FormValues {
  cardNumber: string;
  holderName: string;
  expiry: string;
  cvv: string;
  doSaveData: boolean;
}

const AddCardScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    cardNumber: '',
    holderName: '',
    expiry: '',
    cvv: '',
    doSaveData: false,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _toggleSaveData = () => {
    setFormState(oldValues => ({
      ...oldValues,
      doSaveData: !oldValues.doSaveData,
    }));
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
          required
        />
        <VerticalSpacer factor={3} />
        <TextField
          placeholder="ex. Jonathan Paul Ive"
          name="holderName"
          value={formState.holderName}
          onChangeText={_handleChangeText}
          label="Cardholder name"
          required
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
              required
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
              required
            />
          </View>
        </View>
        <VerticalSpacer factor={3} />
        <CheckBox
          text="Save for next payment."
          checked={formState.doSaveData}
          onPress={_toggleSaveData}
        />
        <VerticalSpacer factor={3} />
        <BigButton title="Pay Now" onPress={() => setShowSuccessModal(true)} />
        <SuccessModal
          visible={showSuccessModal}
          title="Successfully Paid!"
          description="Launching soon to connect with other stores – stay tuned for updates!"
          onClose={() => setShowSuccessModal(false)}
          secondaryButtonTitle="Close">
          <View
            style={[
              defaultStyles.center,
              styles.thumbContainer,
              defaultStyles.alignSelfCenter,
            ]}>
            {getIcon('Tick', {width: rw(32)})}
          </View>
        </SuccessModal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    width: rw(62),
    height: rw(62),
    borderRadius: rw(62),
    backgroundColor: '#23C934',
  },
});

export default AddCardScreen;
