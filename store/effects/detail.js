import { call, takeLatest, put } from 'redux-saga/effects';
import { ZAN, GET_ZAN, ADD_COMMENT } from '../../constants/api.js';
import { requestWithToken } from '../../utils/request.js';

function* zan({ payload }) {
  console.log('getzan');
  const data = yield call(requestWithToken, ZAN, payload);
  console.log(data);
  yield put({ type: 'detail/getZan', payload });
  // yield put({ type: 'detail/save', payload: { detailTypes: data.body.result } });
}

function* getZanList({ payload }) {
  const data = yield call(requestWithToken, GET_ZAN, payload);
  console.log(data);
  // yield put({ type: 'detail/save', payload: { detailTypes: data.body.result } });
}

function* addComment({ payload }) {
  const data = yield call(requestWithToken, ADD_COMMENT, payload);
  console.log(data);
  // yield put({ type: 'detail/save', payload: { detailTypes: data.body.result } });
}

export default [
  takeLatest('detail/zan', zan),
  takeLatest('detail/getZan', getZanList),
  takeLatest('detail/addComment', addComment),
];
