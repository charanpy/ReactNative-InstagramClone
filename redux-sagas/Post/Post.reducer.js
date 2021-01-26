import { PostTypes } from './Post.type';

const initialState = {
  isMultiple: false,
  defaultImage: [],
  selectedImage: [],
  selectedAlbumName: 'Instagram',
  albumNameList: {},
  photos: {},
  loading: false,
  success: false,
  hasPermission: false,
};

const ProfileReducer = (state = initialState, action) => {
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
        hasPermission: false
      };
    default:
      return state;
  }
};

export default ProfileReducer;
