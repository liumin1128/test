import React, { Component } from 'react'

import { withReduxSaga } from '../store'

import Head from '../components/Head'
import NewsList from '../components/News/List'
import { Container, Main, Sider } from '../components/layout'

const Index = () => <div>
    <Head />
    <Container>
      <Main>
        <NewsList />
      </Main>
      <Sider>sider</Sider>
    </Container>
</div>

Index.getInitialProps = async ({ req, store }) => {
  store.dispatch({
    type: 'news/init'
  })
}

export default withReduxSaga(Index)
