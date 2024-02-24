import {useEffect} from 'react';
import RootNavigation from 'navigation/RootNavigation';
import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import defaultStyles from 'utils/defaultStyles';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  return (
    <GestureHandlerRootView style={defaultStyles.flex1}>
      <RootNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
