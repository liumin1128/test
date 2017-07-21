import {delay} from 'redux-saga'
import {all, call, select, put, take, takeLatest} from 'redux-saga/effects'
import { GET_NEWS } from '../../constants/api.js'
import request from '../../utils/fetch.js'

const defaultParams = {
  page: 1,
  pageSize: 10,
}

function* getNewsInit() {
  const { news } = yield select()
  const list = news.list
  if (list.length === 0) {
    console.log('没有list存在，判断为第一次渲染')
    const data = yield call(request, GET_NEWS, defaultParams);
    yield put({ type: 'news/save', payload: { list: data.body.result } });
  } else {
    console.log('list存在，不再加载')
  }
}

function* getNewsList({ payload }) {
  const { news } = yield select()
  const list = news.list
  const data = yield call(request, GET_NEWS, { ...defaultParams, ...payload });
  console.log('下拉加载成功')
  yield put({ type: 'news/save', payload: { list: list.concat(data.body.result) } });
}

function* getNewsDetail({ payload }) {
  const { news } = yield select()
  const detail = news.detail
  if (payload.id === detail.id) {
    console.log('detail已存在')
    return
  } else {
    console.log('detail不存在')
    const list = news.list
    let detail = list.find(i => {
      return i.id === payload.id
    })
    if (!detail) {
      console.log('detail联网才被找到')
      const data = yield call(request, GET_NEWS, payload);
      detail = data.body.result[0]
    } else {
      // window.scrollTo(0, 0);
      console.log('detail在列表中被找到')
    }
    yield put({ type: 'news/save', payload: { detail } });
  }
}

function * rootSaga () {
  yield all([
    takeLatest('news/init', getNewsInit),
    takeLatest('news/loadmore', getNewsList),
    takeLatest('news/getDetail', getNewsDetail),
  ])
}

export default rootSaga
