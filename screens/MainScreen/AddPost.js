import React, {
  useState, useEffect, useReducer, createContext
} from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import Media, { PostContext } from '../../components/Post/helper/Image';
import { initialState, PostReducer } from '../../components/Post/PostReducer';
import MainContainer from '../MainContainer';
import IconComponent from '../../components/Icon';
import PostHeader from '../../components/PostHeader';
import TextComponent from '../../components/TextComponent';
import SelectAlbum from '../../components/Post/SelectAlbum';


const AddPost = ({ navigation }) => {
  console.log(initialState);
  const [state, dispatch] = useReducer(PostReducer, initialState);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log('Rendered');
    console.log(Media);
    console.log(Permissions.getAsync(Permissions.CAMERA_ROLL));
  });
  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        navigation.navigate('Home');
      }


      const getPhotosFromAlbum = await Media.getPhotosFromAlbum(
        state.albumName
      );

      const photo = await Media.photo(getPhotosFromAlbum);

      dispatch({ type: 'SET_MEDIA', payload: photo.assets });
      dispatch({ type: 'DEFAULT_IMAGE' });
    };
    askPermission();
  }, [navigation, state.albumName]);

  const screenWidth = Dimensions.get('window').width / 4 - 5;
  const getPhotos = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image
          source={{
            isStatic: true,
            uri: state.media[item],
          }}
          style={{
            width: screenWidth,
            height: screenWidth,
            resizeMode: 'cover',
            marginRight: 5,
          }}
        />
      </TouchableOpacity>
    );
  };

  const setModalVisible = () => {
    setModal((visible) => !visible);
  };

  return (
    <MainContainer
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <PostHeader />
        <PostContext.Provider value={{ state, dispatch }}>
          {state.selectedImage && (
            <View style={styles.Selected_Image}>
              <Image
                source={{
                  uri: state.selectedImage[state.selectedImage.length - 1],
                  isStatic: true,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
          )}
          <TouchableOpacity onPress={
            () => dispatch({ type: 'MODAL' })}>
            <View
              style={{
                marginBottom: '20%',
                flexDirection: 'row',
                marginTop: '5%',
                paddingLeft: 10,
              }}
            >
              <TextComponent style={styles.Set_Album_Name}>
                {state.albumName}
              </TextComponent>
              <View
                style={{
                  justifyContent: 'flex-end',
                  marginLeft: '2%',
                }}
              >
                <IconComponent
                  Component={Ionicons}
                  name='ios-arrow-down'
                  size={22}
                />
              </View>
            </View>
          </TouchableOpacity>
          <SelectAlbum />
          {state.media && (
            <FlatList
              columnWrapperStyle={{
                flexWrap: 'wrap',
                width: '100%',
              }}
              data={Object.keys(state.media)}
              renderItem={getPhotos}
              keyExtractor={(item) => item}
              numColumns={4}
            />
          )}
        </PostContext.Provider>
      </View>
    </MainContainer>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  Selected_Image: {
    marginTop: '5%',
    width: '100%',
    height: '50%',
    overflow: 'scroll',
  },
  Set_Album_Name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },
});

// <Modal
//             isVisible={modal}
//             onBackButtonPress={() => setModal(false)}
//             swipeDirection='down'
//             onSwipeComplete={() => setModal(false)}
//             animationOut='slideOutDown'
//             style={{ width: '100%', padding: 0, margin: 0 }}
//           >
//             <ScrollView>
//               <MainContainer
//                 modal
//                 style={{
//                   borderTopLeftRadius: 20,
//                   borderTopRightRadius: 20,
//                 }}
//               >
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     marginTop: '2%',
//                   }}
//                 >
//                   <IconComponent Component={FontAwesome} name='minus' size={48} />
//                 </View>

//                 <View>
//                   {state.albumList &&
//                     state.albumList.map((album, index) => (
//                       <TouchableNativeFeedback
//                         key={index}
//                         style={{ width: '100%' }}
//                         onPress={() => {
//                           dispatch({ type: 'SET_ALBUM_NAME', payload: album });
//                           setModal(false);
//                         }}
//                       >
//                         <View style={{ padding: 10 }}>
//                           <TextComponent
//                             style={{ fontFamily: 'Roboto-Regular', fontSize: 16 }}
//                           >
//                             {album}
//                           </TextComponent>
//                         </View>
//                       </TouchableNativeFeedback>
//                     ))}
//                 </View>
//               </MainContainer>
//             </ScrollView>
//           </Modal>
