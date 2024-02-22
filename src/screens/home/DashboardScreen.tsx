import DashboardAppbar from 'components/appbars/DashboardAppbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import defaultStyles from 'utils/defaultStyles';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={[defaultStyles.bgWhite, defaultStyles.flex1]}>
      <DashboardAppbar />
    </SafeAreaView>
  );
};

export default DashboardScreen;
