import { PermissionsAndroid } from "react-native";


export const MakeCallsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
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

