import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import HorizontalSpacer from 'components/HorizontalSpacer';
import CircularIconButton from 'components/buttons/CircularIconButton';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {strings} from 'utils/constants';
import defaultStyles from 'utils/defaultStyles';
import {rFB, rw} from 'utils/dimentions';

interface Props {
  onPress?: () => void;
}

const ProfileInfoTile = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[defaultStyles.row, defaultStyles.alignItemsCenter]}
      onPress={onPress}
      activeOpacity={0.8}>
      <CircularIconButton
        icon="Profile"
        containerStyle={defaultStyles.bgPrimary}
      />
      <HorizontalSpacer factor={1.8} />
      <View style={defaultStyles.justifyCenter}>
        <AppText fontWeight="medium" style={styles.heading}>
          Hemendra
        </AppText>
        <View style={[defaultStyles.row, defaultStyles.alignItemsCenter]}>
          <AppText>{strings.verifiedProfile}</AppText>
          {getIcon('Badge', {width: rw(22), height: rw(22)})}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: rFB(17),
  },
});

export default ProfileInfoTile;
