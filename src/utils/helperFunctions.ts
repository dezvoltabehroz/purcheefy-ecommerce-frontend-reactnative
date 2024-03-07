import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export const captureImage = (callback: (asset: Asset) => void) => {
  const options: CameraOptions = {
    mediaType: 'photo',
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchCamera(options, (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User cancelled camera');
    } else if (response.errorCode) {
      console.log('Camera Error: ', response.errorCode);
    } else {
      if (response.assets && response.assets?.length > 0) {
        callback(response.assets?.[0]);
      }
    }
  });
};

export const uploadImageFromLibrary = (callback: (asset: Asset) => void) => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchImageLibrary(options, (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User cancelled Library');
    } else if (response.errorCode) {
      console.log('Camera Error: ', response.errorCode);
    } else {
      if (response.assets && response.assets?.length > 0) {
        callback(response.assets?.[0]);
      }
    }
  });
};
