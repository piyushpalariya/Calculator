import { PermissionsAndroid } from "react-native";


export const ReadExternalStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'App Read External Storage Permission',
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

