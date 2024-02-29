import AppText from 'components/AppText';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {CartType} from 'utils/types';

interface Props {
  selectedType: CartType;
  onPressType: (val: CartType) => void;
}

const CartTypeButtonsGroup = ({selectedType, onPressType}: Props) => {
  return (
    <View
      style={[
        defaultStyles.row,
        defaultStyles.alignItemsCenter,
        styles.container,
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          selectedType == 'Abandoned' && styles.activeButton,
        ]}
        onPress={() => onPressType('Abandoned')}>
        <AppText
          fontWeight={selectedType == 'Abandoned' ? 'medium' : 'regular'}
          style={[
            defaultStyles.body3,
            styles.buttonText,
            selectedType == 'Abandoned' && defaultStyles.textBlack,
          ]}>
          Abandoned
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, selectedType == 'Active' && styles.activeButton]}
        onPress={() => onPressType('Active')}>
        <AppText
          fontWeight={selectedType == 'Active' ? 'medium' : 'regular'}
          style={[
            defaultStyles.body3,
            styles.buttonText,
            selectedType == 'Active' && defaultStyles.textBlack,
          ]}>
          Active
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          ,
          selectedType == 'Recovered' && styles.activeButton,
        ]}
        onPress={() => onPressType('Recovered')}>
        <AppText
          fontWeight={selectedType == 'Recovered' ? 'medium' : 'regular'}
          style={[
            defaultStyles.body3,
            styles.buttonText,
            selectedType == 'Recovered' && defaultStyles.textBlack,
          ]}>
          Recovered
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 100,
    paddingHorizontal: rw(8),
    paddingVertical: rw(8),
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
    backgroundColor: 'rgba(255, 164, 0, 0.23)',
    // shadowColor: '#FEDDC6',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 3,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CartTypeButtonsGroup;
