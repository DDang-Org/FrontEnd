import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'accessToken';

export const storeAccessToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem(KEY, accessToken);
  } catch (error) {
    console.error('Error storing the access token', error);
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(KEY);
  } catch (error) {
    console.error('Error retrieving the access token', error);
    return null;
  }
};

export const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.error('Error removing the access token', error);
  }
};
