import { PermissionsAndroid } from "react-native";


export const FineLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'App fine location Permission',
        message:'App needs access to your location ' ,
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the fine location');
    } else {
      console.log('fine location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

