import { takeLatest, put, call } from 'redux-saga/effects';
import Router from 'next/router';
import { GET_USERINFO } from '../../constants/api.js';
import request from '../../utils/fetch.js';

function* userLogin({ payload }) {
  try {
    if (payload.token) {
      const data = yield call(request, GET_USERINFO, payload);
      yield put({
        type: 'user/save',
        payload: {
          ...data.body,
          ...payload,
        },
      });
      yield Router.push({
        pathname: '/',
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export default [
  takeLatest('user/login', userLogin),
];
