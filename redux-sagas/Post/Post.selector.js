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

export const selectAlbumNameList = createSelector(
  [PostSelector],
  (albums) => albums.albumNameList
);
/* eslint-disable */
export const selectedImage = createSelector(
  [PostSelector],
  (albums) =>
    albums.selectedImage &&
    Object.keys(albums.selectedImage).length &&
    Object.keys(albums.selectedImage)[
      Object.keys(albums.selectedImage).length - 1
    ]
);

export const selectIsMultiple = createSelector(
  [PostSelector],
  (albums) => albums.isMultiple
);

export const selectSelectedImage = createSelector(
  [PostSelector],
  (albums) => albums.selectedImage && albums.selectedImage
);
