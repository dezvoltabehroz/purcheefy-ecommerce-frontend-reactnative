import {BottomSheetProps} from 'utils/types';
import BottomSheet from './BottomSheet';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {rh, rw} from 'utils/dimentions';
import defaultStyles from 'utils/defaultStyles';
import BigButton from 'components/buttons/BigButton';
import VerticalSpacer from 'components/VerticalSpacer';
import {storesList} from 'data/data';
import {colors} from 'utils/themes';
import {useState} from 'react';
import HorizontalSpacer from 'components/HorizontalSpacer';
import {getIcon} from 'assets/icons';

interface Props extends BottomSheetProps {}

const SelectStoreSheet = (props: Props) => {
  const [selectedStoreId, setSelectedStoreId] = useState('1');
  return (
    <BottomSheet
      visible={props.visible}
      heading="Select Store"
      headerLeadingIcon={props.headerLeadingIcon}
      onPressLeadingIcon={props.onPressLeadingIcon}
      onCloseModal={props.onCloseModal}>
      <View style={styles.container}>
        <ScrollView style={defaultStyles.flex1}>
          {storesList.map((store, index) => (
            <TouchableOpacity
              key={store.id}
              activeOpacity={0.8}
              style={[
                defaultStyles.row,
                defaultStyles.alignItemsCenter,
                index !== storesList.length - 1 && styles.borderred,
                defaultStyles.paddingHorizontal16,
                styles.button,
              ]}
              onPress={() => setSelectedStoreId(store.id)}>
              <View
                style={[
                  styles.checkCircle,
                  selectedStoreId == store.id
                    ? styles.selectedCircle
                    : styles.unselectedCircle,
                ]}>
                {selectedStoreId == store.id && (
                  <View style={styles.checkInner} />
                )}
              </View>
              <HorizontalSpacer factor={3} />
              {getIcon(store.horizontalIcon, {width: rw(80), height: rh(43)})}
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={defaultStyles.paddingHorizontal16}>
          <BigButton title="Confirm" onPress={props.onCloseModal} />
        </View>
        <VerticalSpacer />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rh(400),
  },
  checkCircle: {
    width: rw(24),
    height: rw(24),
    borderRadius: rw(24),
    borderWidth: 3,
    ...defaultStyles.center,
  },
  unselectedCircle: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  selectedCircle: {
    borderColor: colors.primaryDark,
  },
  checkInner: {
    backgroundColor: colors.primaryDark,
    width: rw(13),
    height: rw(13),
    borderRadius: rw(13),
  },
  borderred: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000026',
  },
  button: {
    paddingVertical: rh(8),
  },
});

export default SelectStoreSheet;
