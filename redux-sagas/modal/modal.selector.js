import { createSelector } from 'reselect';

const ModalSelector = (state) => state.modal;

const selectModalVisible = createSelector(
  [ModalSelector],
  (modal) => modal.modalVisible
);

export default selectModalVisible;
