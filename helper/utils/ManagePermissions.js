import * as Permissions from 'expo-permissions';

export const getCameraRollPermission = async () => {
  const { granted } = await Permissions.getAsync(
    Permissions.CAMERA_ROLL
  );
  return granted;
};

export const askCameraRollPermission = async () => {
  const { granted } = await Permissions.askAsync(
    Permissions.CAMERA_ROLL
  );
  return granted;
};
