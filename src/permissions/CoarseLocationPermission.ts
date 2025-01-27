import { PermissionsAndroid } from "react-native";


export const CoarseLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'App Coarse Location Permission',
        message:'App needs access to your Coarse location ',
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

