import { PermissionsAndroid } from "react-native";


export const AnswerCallsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ANSWER_PHONE_CALLS,
      {
        title: 'App calls Permission',
        message:'App needs access to your calls ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the calls');
    } else {
      console.log('calls permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

