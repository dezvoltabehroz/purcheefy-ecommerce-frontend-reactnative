import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getIcon} from 'assets/icons';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import BigButton from 'components/buttons/BigButton';
import SuccessModal from 'components/modals/SuccessModal';
import NoteTile from 'components/tiles/NoteTile';
import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {rw} from 'utils/dimentions';
import {DashboardStackParamList} from 'utils/types';

const NotesListingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const [selectedNote, setSelectedNote] = useState<number | undefined>();
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const _handleDeletePress = () => {
    setSelectedNote(undefined);
    setShowDeleteAccountModal(true);
  };

  const _handleEditPress = () => {
    setSelectedNote(undefined);
    navigation.navigate('EditNoteScreen');
  };

  const _renderItem = ({index}: {index: number}) => {
    return (
      <NoteTile
        showMenuView={selectedNote == index}
        onPressMenuButton={() =>
          setSelectedNote(selectedNote == index ? undefined : index)
        }
        onPressDelete={_handleDeletePress}
        onPressEdit={_handleEditPress}
      />
    );
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
      <SuccessModal
        title="Are you sure you want to Delete it?"
        description="When you delete notes all data will remove."
        primaryButtonTitle="Yes"
        secondaryButtonTitle="Cancel"
        visible={showDeleteAccountModal}
        onClose={() => setShowDeleteAccountModal(false)}>
        <View
          style={[
            defaultStyles.center,
            styles.thumbContainer,
            defaultStyles.alignSelfCenter,
          ]}>
          {getIcon('DeleteWhite', {width: rw(44), height: rw(44)})}
        </View>
      </SuccessModal>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  thumbContainer: {
    width: rw(78),
    height: rw(78),
    borderRadius: rw(78),
    backgroundColor: '#FF0000',
    ...defaultStyles.center,
  },
});

export default NotesListingScreen;
