import { createSelector } from 'reselect';

const selectProfile = (state) => state.profile;

const selectUserPhoto = createSelector(
  [selectProfile],
  (profile) => profile.userProfile?.photo
);

const selectIsModalVisible = createSelector(
  [selectProfile],
  (profile) => profile.modal
);

const selectUserProfile = createSelector(
  [selectProfile],
  (profile) => profile.userProfile
);

export default {
  selectUserPhoto,
  selectIsModalVisible,
  selectUserProfile
};
