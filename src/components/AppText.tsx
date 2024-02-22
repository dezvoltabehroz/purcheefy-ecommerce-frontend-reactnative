import {PropsWithChildren} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import {fontSizes} from 'utils/dimentions';
import {colors, fonts} from 'utils/themes';
import {FontFamily, FontWeight} from 'utils/types';

export interface AppTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  onPress?: (e: GestureResponderEvent) => void | undefined;
}

const AppText = ({
  style = {},
  fontFamily = 'Poppins',
  fontWeight = 'regular',
  onPress,
  children,
  ...props
}: PropsWithChildren<AppTextProps>) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      onPress={onPress}
      style={[
        {
          fontFamily: fonts[fontFamily][fontWeight],
          fontSize: fontSizes.body,
          color: colors.black,
          lineHeight: 26,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
