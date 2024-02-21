import {Dimensions} from 'react-native';

export const guidelineBaseWidth = 390;
export const guidelineBaseheight = 844;

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const responsiveWidth = (width: number) => {
  return (deviceWidth * width) / guidelineBaseWidth;
};

const responsiveHeight = (height: number) => {
  return (deviceHeight * height) / guidelineBaseheight;
};

export const responsiveFontOrBorder = (size: number, factor: number = 0.5) => {
  return size + (responsiveWidth(size) - size) * factor;
};

export const fontSizes = {
  h1: responsiveFontOrBorder(42),
  h2: responsiveFontOrBorder(30),
  h3: responsiveFontOrBorder(26),
  h4: responsiveFontOrBorder(24),
  h5: responsiveFontOrBorder(18),
  h6: responsiveFontOrBorder(16),
  body: responsiveFontOrBorder(15),
  body2: responsiveFontOrBorder(14),
  body3: responsiveFontOrBorder(13),
  body3Small: responsiveFontOrBorder(12),
  body4: responsiveFontOrBorder(10),
  small: responsiveFontOrBorder(8),
};

export const sizes = {};

export {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontOrBorder as rFB,
};

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
