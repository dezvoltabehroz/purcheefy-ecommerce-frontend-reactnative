import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';
import {CartTileProps} from 'utils/types';

const SimpleCartTile = (props: CartTileProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: props.backgroundColor}]}
      onPress={props.onPress}>
      <AppText style={[styles.heading]}>{props.title}</AppText>
      <VerticalSpacer />
      <View
        style={[
          defaultStyles.row,
          defaultStyles.alignItemsCenter,
          defaultStyles.justifyContentSpBt,
        ]}>
        <AppText fontWeight="medium" style={[defaultStyles.h4]}>
          {props.value}
        </AppText>
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <AppText style={[styles.heading, defaultStyles.body2]}>
            {strings.carts}:
          </AppText>
          <HorizontalSpacer factor={0.5} />
          <View style={styles.valueContainer}>
            <AppText fontWeight="semiBold" style={[defaultStyles.body3]}>
              {props.cartCount}
            </AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: rh(12),
    paddingHorizontal: rw(24),
    borderRadius: 20,
  },
  valueContainer: {
    paddingHorizontal: rw(8),
    paddingVertical: rh(2),
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: 3,
  },
  heading: {
    color: '#686868',
  },
});

export default SimpleCartTile;
