import { PermissionsAndroid } from "react-native";


export const ReadCalenderPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
      {
        title: 'App calender Permission',
        message:'App needs access to your calender ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the calender');
    } else {
      console.log('calender permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

