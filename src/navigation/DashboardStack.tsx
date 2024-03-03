import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCardScreen from 'screens/dashboard/AddCardScreen';
import CartDetailScreen from 'screens/dashboard/CartDetailScreen';
import CartListingScreen from 'screens/dashboard/CartListingScreen';
import DashboardScreen from 'screens/dashboard/DashboardScreen';
import EditCartScreen from 'screens/dashboard/EditCartScreen';
import EditNoteScreen from 'screens/dashboard/EditNoteScreen';
import NoteDetailScreen from 'screens/dashboard/NoteDetailScreen';
import NotesListingScreen from 'screens/dashboard/NotesListingScreen';
import ProductsListingScreen from 'screens/dashboard/ProductsListingScreen';
import ShopperProfileScreen from 'screens/dashboard/ShopperProfileScreen';
import AddStoreDetailsScreen from 'screens/home/AddStoreDetailsScreen';
import StoresListingScreen from 'screens/home/StoresListingScreen';
import {DashboardStackParamList} from 'utils/types';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen
        name="StoresListingScreen"
        component={StoresListingScreen}
      />
      <Stack.Screen
        name="AddStoreDetailsScreen"
        component={AddStoreDetailsScreen}
      />
      <Stack.Screen name="CartListingScreen" component={CartListingScreen} />
      <Stack.Screen name="CartDetailScreen" component={CartDetailScreen} />
      <Stack.Screen name="NotesListingScreen" component={NotesListingScreen} />
      <Stack.Screen name="EditNoteScreen" component={EditNoteScreen} />
      <Stack.Screen name="NoteDetailScreen" component={NoteDetailScreen} />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
      <Stack.Screen name="EditCartScreen" component={EditCartScreen} />
      <Stack.Screen
        name="ProductsListingScreen"
        component={ProductsListingScreen}
      />
      <Stack.Screen
        name="ShopperProfileScreen"
        component={ShopperProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
