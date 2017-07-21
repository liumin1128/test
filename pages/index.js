import React, { Component } from 'react'
import { withReduxSaga } from '../store'

import Layout from '../components/Layout'
import NewsList from '../components/News/List'

const Index = () => <Layout><NewsList></NewsList></Layout>

Index.getInitialProps = async ({ req, store }) => {
  store.dispatch({
    type: 'news/init'
  })
}

export default withReduxSaga(Index)
