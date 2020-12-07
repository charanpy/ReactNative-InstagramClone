import { all, call } from 'redux-saga/effects';


import { userSagas } from './user/user.saga'
import { themeSagas } from './theme/theme.saga'
export default function* rootSaga() {
     yield all([
          call(userSagas),
          call(themeSagas)
     ])
}