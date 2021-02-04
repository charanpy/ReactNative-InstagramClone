import { modalTypes } from './modal.type';

export const setModalVisibilityStart = () => ({
  type: modalTypes.SET_MODAL_VISIBILITY_START
});

export const setModalVisibilitySuccess = () => ({
  type: modalTypes.SET_MODAL_VISIBILITY_SUCCESS
});

export const setModalVisibilityFailure = () => ({
  type: modalTypes.SET_MODAL_VISIBILITY_FAILURE
});
