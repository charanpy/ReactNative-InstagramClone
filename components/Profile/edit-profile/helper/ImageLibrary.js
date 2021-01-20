import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';

const launchMedia = async () => {
  try {

    const selectedImage = ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8
    });
    if (selectedImage?.cancelled) {
      return false;
    }
    return selectedImage;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export default launchMedia;
