import { createSelector } from 'reselect';

const PostSelector = (state) => state.post;

export const selectIsPermissionGranted = createSelector(
  [PostSelector],
  (post) => post.hasPermission
);

export const selectDefaultPhoto = createSelector(
  [PostSelector],
  (album) => Object.values(album.photos)[0]
);

export const selectPhotos = createSelector(
  [PostSelector],
  (album) => album.photos
);

export const selectIsLoading = createSelector(
  [PostSelector],
  (album) => album.loading
);
