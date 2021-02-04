import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import alertReducer from './alert/alert.reducer';
import themeReducer from './theme/theme.reducer';
import profileReducer from './profile/profile.reducer';
import postReducer from './Post/Post.reducer';
import modalReducer from './modal/modal.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  theme: themeReducer,
  profile: profileReducer,
  post: postReducer,
  modal: modalReducer,
});
export default rootReducer;
