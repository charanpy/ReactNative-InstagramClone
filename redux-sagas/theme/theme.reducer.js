import { themeActionTypes } from './theme.type';
import { setTheme } from '../../helper/utils/token';

const initialState = {
  background: 'white',
  color: 'black',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActionTypes.SET_COLOR_THEME:
      setTheme('dark');
      return {
        background: 'black',
        color: 'white',
      };
    case themeActionTypes.SET_COLOR_THEME_LIGHT:
      setTheme('light');
      return {
        background: 'white',
        color: 'black',
      };
    case themeActionTypes.SET_COLOR_THEME_FAILURE:
    case themeActionTypes.SET_COLOR_THEME_LIGHT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default themeReducer;
