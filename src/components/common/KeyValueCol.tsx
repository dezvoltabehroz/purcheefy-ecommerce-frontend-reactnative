import AppText from 'components/AppText';
import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes} from 'utils/dimentions';

interface Props {
  keyStr: string;
  value?: string;
}

const KeyValueCol = (props: PropsWithChildren<Props>) => {
  return (
    <View style={[defaultStyles.alignItemsStart]}>
      <AppText style={styles.key}>{props.keyStr}</AppText>
      {props.children ?? (
        <AppText fontWeight="bold" style={defaultStyles.h6}>
          {props.value}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  key: {
    fontSize: fontSizes.body4,
    color: 'rgba(0, 0, 0, 0.35)',
  },
});

export default KeyValueCol;
