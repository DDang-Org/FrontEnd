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
    // return await AsyncStorage.getItem(KEY);
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3Mzk3NjQwMDIsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.EF03NpevMSZ2DcM5Q-trEEmRa0KEb5HpJ1HlD-Vj8xy3N2JoFvdQFoWDJRM3IGVwx58L9T2oV7GBTr6wJOevnA';
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
