import alertActionTypes from "./alert.type";
const initialState = []

export const alertReducer = (state = initialState, action) => {
     switch (action.type) {
          case alertActionTypes.SET_ALERT:
               return [
                    ...state,
                    action.payload
               ]
          case alertActionTypes.REMOVE_ALERT:
               return state.filter(alert => alert.id !== action.payload);
          default:
               return state;
     }
}
