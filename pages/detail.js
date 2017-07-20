import React, { Component } from 'react'

import { withReduxSaga } from '../store'

import Head from '../components/Head'
import NewDetail from '../components/News/Detail'
import { Container, Main, Sider } from '../components/layout'

const Index = () => <div>
    <Head />
    <Container>
      <Main>
        <NewDetail />
      </Main>
      <Sider>sider</Sider>
    </Container>
</div>

Index.getInitialProps = async ({ query, store }) => {
  store.dispatch({
    type: 'news/getDetail',
    payload: query
  })
}

export default withReduxSaga(Index)
