import { all } from 'redux-saga/effects';
import news from './news.js';
import detail from './detail.js';

function * rootSaga() {
  yield all([
    ...news,
    ...detail,
  ]);
}

export default rootSaga;
