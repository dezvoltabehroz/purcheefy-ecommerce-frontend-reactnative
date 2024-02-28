import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import AddImageButton from 'components/buttons/AddImageButton';
import BigButton from 'components/buttons/BigButton';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from 'utils/defaultStyles';
import {colors} from 'utils/themes';

interface FormValues {
  title: string;
  description: string;
}

const EditNoteScreen = () => {
  const [formState, setFormState] = useState<FormValues>({
    title: '',
    description: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  return (
    <View style={[defaultStyles.flex1, {backgroundColor: colors.white2}]}>
      <MinimalAppbar title="Add New Note" showBackIcon withElevation />
      <ScrollView
        style={defaultStyles.flex1}
        contentContainerStyle={[
          defaultStyles.paddingHorizontal24,
          defaultStyles.paddingVertical24,
        ]}>
        <AppText fontWeight="semiBold" style={[defaultStyles.h5]}>
          Add Details
        </AppText>
        <VerticalSpacer />
        <TextField
          placeholder="Enter a note title"
          name="title"
          value={formState.title}
          onChangeText={_handleChangeText}
        />
        <VerticalSpacer />
        <TextField
          placeholder="Enter a note here"
          name="description"
          value={formState.description}
          onChangeText={_handleChangeText}
          numberOfLines={4}
        />
        <VerticalSpacer factor={2} />
        <AddImageButton title="Add image" />
      </ScrollView>
      <VerticalSpacer />
      <View style={defaultStyles.paddingHorizontal24}>
        <BigButton title="Add new note" />
      </View>
      <VerticalSpacer factor={2} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditNoteScreen;
