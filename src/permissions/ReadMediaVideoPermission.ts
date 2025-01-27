import { PermissionsAndroid } from "react-native";


export const ReadMediaVideoPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      {
        title: 'App media video Permission',
        message:'App needs access to your media video ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the media video');
    } else {
      console.log('media video permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

