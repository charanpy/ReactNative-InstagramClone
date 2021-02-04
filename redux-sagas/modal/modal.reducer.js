import { modalTypes } from './modal.type';

const initialState = {
  modalVisible: false,
  success: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SET_MODAL_VISIBILITY_START:
      return {
        ...state,
        success: false,
      };
    case modalTypes.SET_MODAL_VISIBILITY_SUCCESS:
      return {
        success: true,
        modalVisible: !state.modalVisible,
      };
    case modalTypes.SET_MODAL_VISIBILITY_FAILURE:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default ModalReducer;
