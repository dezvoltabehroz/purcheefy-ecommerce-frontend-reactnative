import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {colors} from 'utils/themes';

interface Props {
  title: string;
  onPress?: () => void;
}

const AddImageButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.plusButtonContainer}>
        {getIcon('Plus', {width: rw(16), height: rw(16)})}
      </View>
      <VerticalSpacer />
      <AppText style={[defaultStyles.body3, styles.text]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: rh(130),
    ...defaultStyles.center,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    backgroundColor: colors.grey3,
    borderStyle: 'dashed',
  },
  plusButtonContainer: {
    width: rw(32),
    height: rw(32),
    borderRadius: 32,
    backgroundColor: '#F3702426',
    ...defaultStyles.center,
  },
  text: {
    color: '#686868',
  },
});

export default AddImageButton;
