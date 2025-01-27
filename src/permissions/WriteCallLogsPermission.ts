import { PermissionsAndroid } from "react-native";


export const WriteCallLogsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CALL_LOG,
      {
        title: 'App call logs Permission',
        message:'App needs access to your call logs ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the call logs');
    } else {
      console.log('call logs permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

