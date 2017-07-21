import React, { Component } from 'react'
import { withReduxSaga } from '../store'

import Layout from '../components/Layout'
import NewDetail from '../components/News/Detail'

const Index = () => <Layout><NewDetail></NewDetail></Layout>

Index.getInitialProps = async ({ query, store }) => {
  store.dispatch({
    type: 'news/getDetail',
    payload: query
  })
}

export default withReduxSaga(Index)
