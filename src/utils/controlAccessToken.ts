import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'accessToken';

export const storeAccessToken = (accessToken: string) => {
  try {
    AsyncStorage.setItem(KEY, accessToken);
  } catch (error) {
    console.error('Error storing the access token', error);
  }
};

export const getAccessToken = () => {
  try {
    return AsyncStorage.getItem(KEY);
  } catch (error) {
    console.error('Error retrieving the access token', error);
  }
};
