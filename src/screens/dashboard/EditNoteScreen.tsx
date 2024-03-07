import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppText from 'components/AppText';
import VerticalSpacer from 'components/VerticalSpacer';
import MinimalAppbar from 'components/appbars/MinimalAppbar';
import SelectImageSourceSheet from 'components/bottom-sheets/SelectImageSourceSheet';
import AddImageButton from 'components/buttons/AddImageButton';
import BigButton from 'components/buttons/BigButton';
import CapturedImageCard from 'components/cards/CapturedImageCard';
import TextField from 'components/fields/TextField';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Asset} from 'react-native-image-picker';
import defaultStyles from 'utils/defaultStyles';
import {rh, rw} from 'utils/dimentions';
import {captureImage, uploadImageFromLibrary} from 'utils/helperFunctions';
import {colors} from 'utils/themes';
import {DashboardStackParamList, UploadedImageSource} from 'utils/types';

interface FormValues {
  title: string;
  description: string;
}

const EditNoteScreen = () => {
  const [showImageSheet, setShowImageSheet] = useState(false);
  const [uploadedImageAssets, setUploadedImageAssets] = useState<Asset[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const [formState, setFormState] = useState<FormValues>({
    title: '',
    description: '',
  });

  const _handleChangeText = (name: string, value: string) => {
    setFormState(oldValues => ({...oldValues, [name]: value}));
  };

  const _handleImageRemove = (imageUri?: string, index?: number) => {
    setUploadedImageAssets(st => st.filter(d => d.uri != imageUri));
  };

  const _handleImageSourceSelected = (sourceType: UploadedImageSource) => {
    setShowImageSheet(false);
    setTimeout(() => {
      if (sourceType == 'Camera') {
        captureImage(asset => setUploadedImageAssets(st => [...st, asset]));
      } else {
        uploadImageFromLibrary(asset =>
          setUploadedImageAssets(st => [...st, asset]),
        );
      }
    }, 300);
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
        <AddImageButton
          title="Add image"
          onPress={() => setShowImageSheet(true)}
        />
        <VerticalSpacer factor={2} />
        <View style={styles.uploadedImagesContainer}>
          {uploadedImageAssets.map(image => (
            <View style={styles.imageContainer} key={image.uri}>
              <CapturedImageCard
                imageUri={image.uri}
                onPressDelete={() => _handleImageRemove(image.uri)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <VerticalSpacer />
      <View style={defaultStyles.paddingHorizontal24}>
        <BigButton
          title="Add new note"
          onPress={() => navigation.navigate('NoteDetailScreen')}
        />
      </View>
      <VerticalSpacer factor={2} />
      <SelectImageSourceSheet
        visible={showImageSheet}
        onCloseModal={() => setShowImageSheet(false)}
        onItemSelected={_handleImageSourceSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: rw(100),
    height: rw(100),
  },
  uploadedImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: rw(26),
    rowGap: rh(14),
  },
});

export default EditNoteScreen;
