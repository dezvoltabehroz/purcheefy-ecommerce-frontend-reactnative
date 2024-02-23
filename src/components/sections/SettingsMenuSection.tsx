import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import SettingTile from 'components/tiles/SettingTile';
import {View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {SettingMenuItem, SettingStackParamList} from 'utils/types';

interface Props {
  heading: string;
  options: SettingMenuItem[];
}

const SettingsMenuSection = ({heading, options}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SettingStackParamList>>();

  const _handleItemClick = (option: SettingMenuItem) => {
    if (option.navigation && option.navigation.length > 0) {
      navigation.navigate(option.navigation);
    }
  };

  return (
    <View>
      <AppText fontWeight="medium" style={[defaultStyles.h5]}>
        {heading}
      </AppText>
      <VerticalSpacer factor={2} />
      {options.map(d => (
        <SettingTile
          settingItem={d}
          key={d.id}
          onPress={() => _handleItemClick(d)}
        />
      ))}
    </View>
  );
};

export default SettingsMenuSection;
