import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'

function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 800)
  }
}

function * test () {
  yield take('test2')
}

function * rootSaga () {
  yield all([
    takeLatest('test', test)
  ])
}

export default rootSaga
