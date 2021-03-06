import React from 'react';
import Container from './Container';
import Main from './Main';
import Sider from './Sider';
import Head from './Head';
import Header from '../Header';
import Recommend from '../Recommend';

export default ({ children }) => (<div>
  <Head />
  <Header />
  <Container>
    <Main>{ children }</Main>
    <Sider><Recommend /></Sider>
  </Container>
</div>);
