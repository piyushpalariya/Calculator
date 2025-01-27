import { PermissionsAndroid } from "react-native";


export const ReadContactsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'App contacts Permission',
        message:'App needs access to your contacts ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the contacts');
    } else {
      console.log('contacts permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

