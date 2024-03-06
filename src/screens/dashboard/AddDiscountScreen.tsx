import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import Divider from 'components/common/Divider';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rh, rw} from 'utils/dimentions';
import {colors, fonts} from 'utils/themes';
import {DiscountType} from 'utils/types';

const AddDiscountScreen = () => {
  const [value, setValue] = useState('');
  const [selectedType, setSelectedType] = useState<DiscountType>('Currency');
  return (
    <View style={[defaultStyles.flex1]}>
      <MinimalAppbar title="Add Item Discount" showBackIcon withElevation />
      <ScrollView contentContainerStyle={styles.container}>
        <AppText fontWeight="semiBold" style={[defaultStyles.h6]}>
          Add Discount
        </AppText>
        <VerticalSpacer factor={2} />
        <View style={styles.formContainer}>
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="0.00"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            textAlign="right"
            numberOfLines={3}
            style={styles.input}
            keyboardType="number-pad"
          />
          <VerticalSpacer factor={1.5} />

          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              styles.buttonsContainer,
            ]}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.button,
                selectedType == 'Currency' && styles.activeButton,
              ]}
              onPress={() => setSelectedType('Currency')}>
              <AppText
                fontWeight={selectedType == 'Currency' ? 'semiBold' : 'medium'}
                style={[
                  defaultStyles.h6,
                  styles.buttonText,
                  selectedType == 'Currency' && defaultStyles.textWhite,
                ]}>
                CUR
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.button,
                selectedType == 'Percentage' && styles.activeButton,
              ]}
              onPress={() => setSelectedType('Percentage')}>
              <AppText
                fontWeight={
                  selectedType == 'Percentage' ? 'semiBold' : 'medium'
                }
                style={[
                  defaultStyles.h6,
                  styles.buttonText,
                  selectedType == 'Percentage' && defaultStyles.textWhite,
                ]}>
                %
              </AppText>
            </TouchableOpacity>
          </View>
          <VerticalSpacer factor={1.5} />
          <AppText fontWeight="semiBold" style={defaultStyles.body3Small}>
            (Prices Inclusive of VAT 0.01%)
          </AppText>
          <VerticalSpacer factor={0.6} />
          <Divider />
          <VerticalSpacer factor={0.6} />
          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              defaultStyles.justifyContentSpBt,
            ]}>
            <AppText style={[defaultStyles.body3Small, styles.text]}>
              Unit Price
            </AppText>
            <AppText
              fontWeight="medium"
              style={[defaultStyles.body2, styles.text]}>
              $35
            </AppText>
          </View>
          <VerticalSpacer factor={0.6} />
          <Divider />
          <VerticalSpacer factor={0.6} />
          <View
            style={[
              defaultStyles.row,
              defaultStyles.alignItemsCenter,
              defaultStyles.justifyContentSpBt,
            ]}>
            <AppText style={[defaultStyles.body3Small]}>
              Discounted Price
            </AppText>
            <AppText
              fontWeight="medium"
              style={[defaultStyles.body2, styles.text]}>
              $0
            </AppText>
          </View>
        </View>
        <VerticalSpacer factor={2} />
        <BigButton title="Apply" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
  formContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: rw(16),
    paddingVertical: rh(16),
    borderRadius: 24,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    paddingHorizontal: rw(24),
    fontFamily: fonts.Poppins.semiBold,
    fontSize: fontSizes.h4,
    textAlignVertical: 'center',
    color: colors.black,
  },
  button: {
    flex: 1,
    ...defaultStyles.center,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  activeButton: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    borderRadius: 100,
    paddingHorizontal: rw(8),
    paddingVertical: rw(8),
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default AddDiscountScreen;
