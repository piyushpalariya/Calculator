import { PermissionsAndroid } from "react-native";


export const WriteExternalStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'App external storage Permission',
        message:'App needs access to your external storage ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the external storage');
    } else {
      console.log('external storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

