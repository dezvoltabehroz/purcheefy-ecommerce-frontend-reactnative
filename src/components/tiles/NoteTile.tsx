import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import VerticalSpacer from 'components/VerticalSpacer';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';

const NoteTile = () => {
  return (
    <View style={styles.container}>
      <View style={defaultStyles.flex1}>
        <AppText
          numberOfLines={1}
          fontWeight="semiBold"
          style={defaultStyles.body2}>
          Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text
          of
        </AppText>
        <VerticalSpacer factor={0.4} />
        <AppText
          numberOfLines={2}
          style={[styles.description, defaultStyles.body3Small]}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has typesetting industry...
        </AppText>
      </View>
      <HorizontalSpacer factor={2} />
      <TouchableOpacity activeOpacity={0.8}>
        {getIcon('MenuDots', {width: 4, height: 22})}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: rh(16),
    paddingHorizontal: rw(16),
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
});

export default NoteTile;
