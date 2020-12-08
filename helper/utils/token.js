import * as SecureStore from 'expo-secure-store';

export const storeData = async (value) => {
  try {
    console.log('value', value);
    await SecureStore.setItemAsync('token', value);
    // console.log(22, dat)
  } catch (error) {
    console.log(error);
  }
};
export const getData = async () => {
  try {
    const data = await SecureStore.getItemAsync('token');
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteItem = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
  } catch (e) {
    console.log(e);
  }
};

export const getTheme = async () => {
  try {
    const data = await SecureStore.getItemAsync('theme');
    return data;
  } catch (error) {
    return error;
  }
};

export const setTheme = async (value) => {
  try {
    console.log('value', value);
    await SecureStore.setItemAsync('theme', value);
    // console.log(22, dat)
  } catch (error) {
    console.log(error);
  }
};

export const getUniqueId = () => {
  const generateUniqueId = Math.floor(Math.random() * 1000);
  return generateUniqueId;
};
