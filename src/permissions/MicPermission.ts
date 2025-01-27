import { PermissionsAndroid } from "react-native";


export const MicPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'App Microphone Permission',
        message:'App needs access to your microphone ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the microphone');
    } else {
      console.log('microphone permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

