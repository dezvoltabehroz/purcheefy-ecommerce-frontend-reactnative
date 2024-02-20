import React from 'react';
import {View} from 'react-native';
import {rw} from 'utils/dimentions';

const HorizontalSpacer = ({factor = 1}: {factor?: number}) => {
  return <View style={{width: rw(8 * factor)}} />;
};

export default HorizontalSpacer;
