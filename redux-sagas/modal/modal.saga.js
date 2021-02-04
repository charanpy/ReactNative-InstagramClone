import {
  takeLatest, put, call, all
} from 'redux-saga/effects';
import { modalTypes } from './modal.type';
import { setModalVisibilitySuccess } from './modal.action';

export function* modal() {
  yield put(setModalVisibilitySuccess());
}

export function* onModal() {
  yield takeLatest(modalTypes.SET_MODAL_VISIBILITY_SUCCESS, modal);
}

export function* ModalSagas() {
  yield all([call(onModal)]);
}
