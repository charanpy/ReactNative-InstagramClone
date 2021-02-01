import { createSelector } from 'reselect';

const PostSelector = (state) => state.post;

export const selectIsPermissionGranted = createSelector(
  [PostSelector],
  (post) => post.hasPermission
);

export const hi = () => {};
