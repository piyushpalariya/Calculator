import { PermissionsAndroid } from "react-native";


export const ReadMediaAudioPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
      {
        title: 'App media audio Permission',
        message:'App needs access to your media audio ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the media audio');
    } else {
      console.log('media audio permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

