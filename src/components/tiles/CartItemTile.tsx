import {getIcon} from 'assets/icons';
import images from 'assets/images';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import KeyValueCol from 'components/common/KeyValueCol';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  showExtra?: boolean;
}

const CartItemTile = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}>
      <Image source={images.product} style={styles.image} />
      <View style={[defaultStyles.flex1]}>
        <AppText fontWeight="light" style={[defaultStyles.body2]}>
          High heels BLACK - JIMMY CHOO
        </AppText>
        <VerticalSpacer />
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <KeyValueCol keyStr="Items" value="x5" />
          <HorizontalSpacer factor={5} />
          <KeyValueCol keyStr="Value" value="x5">
            <AppText fontWeight="bold">
              $5000
              <HorizontalSpacer />
              <AppText style={[defaultStyles.textPrimary]}>-</AppText>
              <HorizontalSpacer />
              $667
            </AppText>
          </KeyValueCol>
        </View>
        {props.showExtra && (
          <View>
            <VerticalSpacer />
            <View
              style={[
                defaultStyles.row,
                defaultStyles.alignItemsCenter,
                defaultStyles.justifyContentSpBt,
              ]}>
              <View style={[defaultStyles.row, defaultStyles.center]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.counterButton}>
                  {getIcon('ChevronLeft', {width: rw(15), height: rw(15)})}
                </TouchableOpacity>
                <HorizontalSpacer factor={2} />
                <AppText
                  fontWeight="semiBold"
                  style={[defaultStyles.body3, {top: 1}]}>
                  2
                </AppText>
                <HorizontalSpacer factor={2} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.counterButton}>
                  {getIcon('ChevronLeft', {
                    width: rw(15),
                    height: rw(15),
                    scaleX: -1,
                  })}
                </TouchableOpacity>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.smallButton}>
                <AppText
                  style={[defaultStyles.textPrimary, defaultStyles.textSmall]}>
                  Apply discount
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(8),
    paddingVertical: rh(6),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  image: {
    width: rw(80),
    height: rh(76),
    resizeMode: 'contain',
  },
  counterButton: {
    width: rw(25),
    height: rw(25),
    borderRadius: rw(25),
    borderWidth: 1,
    borderColor: '#DEDEDE',
    ...defaultStyles.center,
  },
  smallButton: {
    backgroundColor: '#F3702426',
    borderRadius: 16,
    paddingHorizontal: rw(12),
    paddingVertical: rh(4),
    borderWidth: 1,
    borderColor: '#F3702440',
  },
});

export default CartItemTile;
