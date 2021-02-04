import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';
import { themeSagas } from './theme/theme.saga';
import { profileSagas } from './profile/profile.saga';
import { PostSagas } from './Post/Post.sagas';
import { ModalSagas } from './modal/modal.saga';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(themeSagas),
    call(profileSagas),
    call(PostSagas),
    call(ModalSagas),
  ]);
}
