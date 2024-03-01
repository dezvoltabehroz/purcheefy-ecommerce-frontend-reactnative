import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import AppText from '../AppText';
import {rh, rw} from 'utils/dimentions';
import defaultStyles from 'utils/defaultStyles';

interface Props {
  text?: string;
  lineStyle?: StyleProp<ViewStyle>;
}

const Divider = ({text, lineStyle}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.view, lineStyle]} />
      {text && text.length > 0 ? (
        <AppText style={[styles.text, defaultStyles.body]} fontWeight="medium">
          {text}
        </AppText>
      ) : (
        <></>
      )}
      <View style={[styles.view, lineStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    height: rh(1),
    backgroundColor: '#00000026',
  },
  text: {
    color: '#6A6A6A',
    marginHorizontal: rw(12),
  },
});

export default Divider;
