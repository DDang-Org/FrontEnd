import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = 'accessToken';

export const storeAccessToken = async (accessToken: string) => {
  try {
    await EncryptedStorage.setItem(KEY, accessToken);
  } catch (error) {
    console.error('Failed to save access token:', error);
  }
};

export const getAccessToken = async () => {
  try {
    return await EncryptedStorage.getItem(KEY);
  } catch (error) {
    console.error('Failed to fetch access token:', error);
    return null;
  }
};

export const removeAccessToken = async () => {
  try {
    await EncryptedStorage.removeItem(KEY);
  } catch (error) {
    console.error('Failed to remove access token:', error);
  }
};
