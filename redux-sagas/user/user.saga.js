import { takeLatest, put, all, call } from 'redux-saga/effects';
import {userActionTypes} from './user.type'
import {
     sendEmailConfirmationStart,
     sendEmailConfirmationSuccess,
     sendEmailConfirmationFailure
} from './user.action';




export function* emailConfirmation{
     yield takeLatest(user)
}