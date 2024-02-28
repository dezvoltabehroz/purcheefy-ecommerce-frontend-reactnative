import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import NoteTile from 'components/tiles/NoteTile';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {DashboardStackParamList} from 'utils/types';

const NotesListingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const _renderItem = () => {
    return <NoteTile />;
  };

  const _renderHeader = () => {
    return (
      <View>
        <AppText fontWeight="semiBold" style={defaultStyles.h5}>
          Notes List
        </AppText>
        <AppText style={[defaultStyles.body3Small, styles.description]}>
          Add notes that help you recall the last interaction with this shopper.
        </AppText>
        <VerticalSpacer factor={2} />
      </View>
    );
  };

  return (
    <View style={[defaultStyles.flex1]}>
      <MinimalAppbar title="Follow up notes" showBackIcon withElevation />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={_renderItem}
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}
        style={defaultStyles.flex1}
        ItemSeparatorComponent={() => <VerticalSpacer factor={2} />}
        ListHeaderComponent={_renderHeader}
      />
      <VerticalSpacer factor={2} />
      <View style={[defaultStyles.paddingHorizontal24]}>
        <BigButton
          title="Add New Note"
          onPress={() => navigation.navigate('EditNoteScreen')}
        />
      </View>
      <VerticalSpacer factor={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default NotesListingScreen;
