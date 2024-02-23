import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import SettingTile from 'components/tiles/SettingTile';
import {StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {SettingMenuItem} from 'utils/types';

interface Props {
  heading: string;
  options: SettingMenuItem[];
}

const SettingsMenuSection = ({heading, options}: Props) => {
  return (
    <View>
      <AppText fontWeight="medium" style={[defaultStyles.h5]}>
        {heading}
      </AppText>
      <VerticalSpacer factor={2} />
      {options.map(d => (
        <SettingTile settingItem={d} key={d.id} />
      ))}
    </View>
  );
};

export default SettingsMenuSection;
