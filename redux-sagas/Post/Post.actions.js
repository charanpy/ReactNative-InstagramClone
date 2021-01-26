import { PostTypes } from './Post.type';

export const askPermissionStart = () => ({
  type: PostTypes.ASK_PERMISSION_START,
});

export const askPermissionSuccess = () => ({
  type: PostTypes.ASK_PERMISSION_SUCCESS
});

export const askPermissionFailure = () => ({
  type: PostTypes.ASK_PERMISSION_FAILURE
});
