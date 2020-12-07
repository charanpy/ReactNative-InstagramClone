import { combineReducers } from 'redux';
import { userReducer } from "./user/user.reducer"
import { alertReducer } from './alert/alert.reducer'
import themeReducer from './theme/theme.reducer'

const rootReducer = combineReducers({
     user: userReducer,
     alert: alertReducer,
     theme: themeReducer
});
export default rootReducer;