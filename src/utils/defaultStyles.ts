import {StyleSheet} from 'react-native';
import {colors, fonts} from './themes';
import {fontSizes, rFB, rh, rw} from './dimentions';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  height100: {
    height: '100%',
  },
  width100: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  column: {
    flexDirection: 'column',
  },
  justifyContentSpBt: {
    justifyContent: 'space-between',
  },
  justifyContentSpEv: {
    justifyContent: 'space-evenly',
  },
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgWhite: {
    backgroundColor: colors.white,
  },
  textWhite: {
    color: colors.white,
  },
  textBlack: {
    color: colors.black,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  h1: {
    fontSize: fontSizes.h1,
  },
  h2: {
    fontSize: fontSizes.h2,
  },
  h2_5: {
    fontSize: fontSizes.h2_5,
  },
  h3: {
    fontSize: fontSizes.h3,
  },
  h4: {
    fontSize: fontSizes.h4,
  },
  h5: {
    fontSize: fontSizes.h5,
  },
  h6: {
    fontSize: fontSizes.h6,
  },
  body: {
    fontSize: fontSizes.body,
  },
  body2: {
    fontSize: fontSizes.body2,
  },
  body3: {
    fontSize: fontSizes.body3,
  },
  body3Small: {
    fontSize: fontSizes.body3Small,
  },
  body4: {
    fontSize: fontSizes.body4,
  },
  textSmall: {
    fontSize: fontSizes.small,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  textPrimary: {
    color: colors.primaryDark,
  },
  textGrey1: {
    color: colors.grey1,
  },
  textGrey4: {
    color: colors.grey4,
  },
  textBlack100: {
    color: colors.black100,
  },
  textRed: {
    color: colors.red,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  fontMedium: {
    fontFamily: fonts.Poppins.medium,
  },
  underlinePrimary: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.primary,
  },
  paddingHorizontal0: {
    paddingHorizontal: 0,
  },
  paddingHorizontal16: {
    paddingHorizontal: rw(16),
  },
  paddingHorizontal24: {
    paddingHorizontal: rw(24),
  },
  paddingVertical24: {
    paddingVertical: rh(24),
  },
  marginHorizontal24: {
    marginHorizontal: rw(24),
  },
  marginHorizontal20: {
    marginHorizontal: rw(20),
  },
  lessTextTopMargin: {
    marginTop: rw(-10),
  },
  paddingHorizontal20: {
    paddingHorizontal: rw(24),
  },
});
