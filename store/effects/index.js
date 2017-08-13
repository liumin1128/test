import { all } from 'redux-saga/effects';
import news from './news.js';
import detail from './detail.js';
import user from './user.js';

function * rootSaga() {
  yield all([
    ...news,
    ...user,
    ...detail,
  ]);
}

export default rootSaga;
