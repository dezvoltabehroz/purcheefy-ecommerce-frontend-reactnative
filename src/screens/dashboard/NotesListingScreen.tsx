import MinimalAppbar from 'components/appbars/MinimalAppbar';
import {View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';

const NotesListingScreen = () => {
  return (
    <View style={[defaultStyles.flex1]}>
      <MinimalAppbar title="Follow up notes" showBackIcon withElevation />
    </View>
  );
};

export default NotesListingScreen;
