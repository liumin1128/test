import { all, call, takeLatest, put } from 'redux-saga/effects';
import { ZAN, GET_ZAN, GET_ZAN_STATUS, ADD_COMMENT } from '../../constants/api.js';
import { requestWithToken } from '../../utils/request.js';

function* init({ payload }) {
  yield all([
    put({ type: 'detail/getZan', payload }),
    put({ type: 'detail/getZanStatus', payload }),
  ]);
}

function* zan({ payload }) {
  const data = yield call(requestWithToken, ZAN, payload);
  console.log(data);
  yield put({ type: 'detail/getZan', payload });
}

function* getZanList({ payload }) {
  const data = yield call(requestWithToken, GET_ZAN, payload);
  yield put({ type: 'detail/save', payload: { zanList: data || [] } });
}

function* getZanStatus({ payload }) {
  const data = yield call(requestWithToken, GET_ZAN_STATUS, payload);
  yield put({ type: 'detail/save', payload: { zanStatus: data.code === 201 } });
}

function* addComment({ payload }) {
  const data = yield call(requestWithToken, ADD_COMMENT, payload);
  console.log(data);
}

export default [
  takeLatest('detail/init', init),
  takeLatest('detail/zan', zan),
  takeLatest('detail/getZan', getZanList),
  takeLatest('detail/getZanStatus', getZanStatus),
  takeLatest('detail/addComment', addComment),
];
