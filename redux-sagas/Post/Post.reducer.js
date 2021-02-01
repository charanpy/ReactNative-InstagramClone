import { PostTypes } from './Post.type';
import AlbumNameList, { setDefaultPhoto } from './helper';

const initialState = {
  isMultiple: false,
  defaultImage: [],
  selectedImage: [],
  selectedAlbumName: 'Camera',
  albumNameList: {},
  photos: {},
  loading: false,
  success: false,
  hasPermission: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostTypes.SET_MULTIPLE_IMAGE_SUCCESS:
      return {
        ...state,
        isMultiple: state.isMultiple,
      };
    case PostTypes.ASK_PERMISSION_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case PostTypes.ASK_PERMISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        hasPermission: true,
      };
    case PostTypes.ASK_PERMISSION_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        hasPermission: false,
      };
    case PostTypes.GET_ALBUM_LIST_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case PostTypes.GET_ALBUM_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        albumNameList: AlbumNameList(action.payload, 'id', 'title'),
      };
    case PostTypes.GET_ALBUM_LIST_FAILURE:
    case PostTypes.SET_MEDIA_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case PostTypes.SET_MEDIA_START:
    case PostTypes.EMPTY_MEDIA_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case PostTypes.SET_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        photos: AlbumNameList(action.payload, 'id', 'uri'),
        defaultImage: setDefaultPhoto(action.payload[0]),
      };
    case PostTypes.EMPTY_MEDIA_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default PostReducer;
