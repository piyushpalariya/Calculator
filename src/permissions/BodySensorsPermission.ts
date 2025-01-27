import { PermissionsAndroid } from "react-native";


export const BodySensorsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
      {
        title: 'App sensors Permission',
        message:'App needs access to your sensors ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the sensors');
    } else {
      console.log('sensors permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

