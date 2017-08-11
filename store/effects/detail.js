import { all, call, takeLatest, put } from 'redux-saga/effects';
import { ZAN, GET_ZAN, GET_ZAN_STATUS, ADD_COMMENT, GET_COMMENT, DEL_COMMENT } from '../../constants/api.js';
import { requestWithToken } from '../../utils/request.js';

function* init({ payload }) {
  yield all([
    put({ type: 'detail/getZan', payload }),
    put({ type: 'detail/getZanStatus', payload }),
    put({ type: 'detail/getComments', payload }),
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
  yield put({ type: 'detail/getComments', payload: { item: payload.item } });
}

function* getComments({ payload }) {
  const data = yield call(requestWithToken, GET_COMMENT, payload);
  console.log('GET_COMMENT');
  console.log(data);
  yield put({ type: 'detail/save', payload: { commentList: data } });
}

function* delComment({ payload }) {
  const data = yield call(requestWithToken, DEL_COMMENT, { id: payload.id });
  console.log(data);
  yield put({ type: 'detail/getComments', payload: { item: payload.item } });
}


export default [
  takeLatest('detail/init', init),
  takeLatest('detail/zan', zan),
  takeLatest('detail/getZan', getZanList),
  takeLatest('detail/getZanStatus', getZanStatus),
  takeLatest('detail/addComment', addComment),
  takeLatest('detail/getComments', getComments),
  takeLatest('detail/delComment', delComment),
];
