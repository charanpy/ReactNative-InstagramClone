import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';
import { themeSagas } from './theme/theme.saga';
import { profileSagas } from './profile/profile.saga';
import { PostSagas } from './Post/Post.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(themeSagas), call(profileSagas), call(PostSagas)]);
}
