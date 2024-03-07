import {getIcon} from 'assets/icons';
import React from 'react';
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {rh, rw} from 'utils/dimentions';

interface Props {
  imageUri?: string;
  onPressDelete?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CapturedImageCard = ({imageUri, onPressDelete, style}: Props) => {
  if (imageUri && imageUri?.length > 0) {
    return (
      <ImageBackground
        source={{uri: imageUri}}
        style={[styles.container, style]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPressDelete}>
          {getIcon('DeleteWhite', {width: rw(14), height: rh(14)})}
        </TouchableOpacity>
      </ImageBackground>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rh(2),
    backgroundColor: 'rgba(167, 10, 16, 0.5)',
  },
});

export default CapturedImageCard;
