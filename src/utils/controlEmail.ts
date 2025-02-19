import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = 'email';

export const storeEmail = async (email: string) => {
  try {
    await EncryptedStorage.setItem(KEY, email);
  } catch (error) {
    console.error('Failed to save Email: ', error);
  }
};

export const getEmail = async () => {
  try {
    return await EncryptedStorage.getItem(KEY);
  } catch (error) {
    console.error('Failed to fetch Email: ', error);
    return null;
  }
};

export const removeEmail = async () => {
  try {
    return await EncryptedStorage.removeItem(KEY);
  } catch (error) {
    console.error('Failed to remove Email: ', error);
    return null;
  }
};
