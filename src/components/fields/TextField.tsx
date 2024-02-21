import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import React, {useState} from 'react';
import {
  GestureResponderEvent,
  I18nManager,
  KeyboardType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {fontSizes, rFB, rh, rw} from 'utils/dimentions';
import {colors, fonts} from 'utils/themes';
import {IconType} from 'utils/types';

interface Props {
  label?: string;
  subLable?: string;
  placeholder?: string | undefined;
  value: string;
  name: string;
  trailingIcon?: IconType | undefined;
  leadingIcon?: IconType | undefined;
  onPressTrailingIcon?: (event: GestureResponderEvent) => void;
  onChangeText: (name: string, value: string) => void | undefined;
  secureTextEntry?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  numberOfLines?: number;
  errorText?: string | undefined;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  maxLength?: number;
}

const TextField = ({
  label,
  subLable,
  placeholder,
  value,
  onChangeText,
  name,
  trailingIcon,
  onPressTrailingIcon,
  secureTextEntry = false,
  onFocus,
  onBlur,
  numberOfLines,
  errorText,
  leadingIcon,
  inputStyle,
  keyboardType,
  maxLength,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const _handleFocused = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const _handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          defaultStyles.row,
          defaultStyles.justifyContentSpBt,
          defaultStyles.alignItemsCenter,
        ]}>
        {label ? (
          <AppText fontWeight="bold" style={styles.label}>
            {label}
          </AppText>
        ) : (
          <></>
        )}
        {subLable ? (
          <AppText style={styles.subLabel}>{subLable}</AppText>
        ) : (
          <></>
        )}
      </View>
      <VerticalSpacer />
      <View
        style={[
          defaultStyles.row,
          defaultStyles.alignItemsCenter,
          styles.inputContainer,
          isFocused && styles.inputFocused,
          isFocused && styles.borderred,
          leadingIcon && styles.paddedStart,
        ]}>
        {leadingIcon && getIcon(leadingIcon, {width: rw(30)})}
        <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            {
              textAlignVertical:
                numberOfLines && numberOfLines > 1 ? 'top' : 'center',
            },
            inputStyle,
          ]}
          placeholderTextColor={colors.placeholderColor}
          placeholder={placeholder}
          onFocus={_handleFocused}
          onBlur={_handleBlur}
          value={value}
          onChangeText={val => onChangeText(name, val)}
          secureTextEntry={secureTextEntry}
          // onBlur={() => setIsFocused(false)}
          numberOfLines={numberOfLines}
          multiline={numberOfLines ? numberOfLines > 1 : false}
          cursorColor={colors.black}
          keyboardType={keyboardType}
          maxLength={maxLength}
          textAlign={I18nManager.isRTL ? 'right' : 'left'}
        />
        {trailingIcon && (
          <TouchableOpacity
            onPress={onPressTrailingIcon}
            style={styles.trailingIcon}
            activeOpacity={0.8}>
            {getIcon(trailingIcon, {width: rw(30)})}
          </TouchableOpacity>
        )}
      </View>
      {errorText && errorText?.length > 0 && (
        <>
          <VerticalSpacer />
          <AppText style={[defaultStyles.body2, defaultStyles.textPrimary]}>
            {errorText}
          </AppText>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: colors.black,
    fontSize: rFB(15),
  },
  subLabel: {
    fontSize: fontSizes.body3,
  },
  inputContainer: {
    backgroundColor: colors.grey3,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  input: {
    fontSize: rFB(16),
    borderRadius: rFB(8),
    color: colors.black,
    // fontFamily: fonts.Poppins.regular,
    paddingHorizontal: rw(8),
    flex: 1,
  },
  paddedStart: {
    paddingStart: rw(8),
  },
  inputFocused: {
    // backgroundColor: colors.white,
    // borderColor: colors.black,
  },
  borderred: {
    // borderWidth: 2,
  },
  trailingIcon: {
    paddingRight: rw(8),
  },
});

export default TextField;
