import {View} from 'react-native';
import {rh} from 'utils/dimentions';

const VerticalSpacer = ({factor = 1}: {factor?: number}) => {
  return <View style={{height: rh(8 * factor)}} />;
};

export default VerticalSpacer;
