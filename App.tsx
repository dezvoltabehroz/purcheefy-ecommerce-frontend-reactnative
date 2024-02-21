import RootNavigation from 'navigation/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import defaultStyles from 'utils/defaultStyles';

const App = () => {
  return (
    <GestureHandlerRootView style={defaultStyles.flex1}>
      <RootNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
