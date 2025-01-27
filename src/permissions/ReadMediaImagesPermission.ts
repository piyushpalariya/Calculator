import { PermissionsAndroid } from "react-native";


export const ReadMediaImagesPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      {
        title: 'App media images Permission',
        message:'App needs access to your media images ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the media images');
    } else {
      console.log('media images permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

