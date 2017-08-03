import React from 'react';
import { withReduxSaga } from '../store';

import Layout from '../components/Layout';
import NewsList from '../components/News/List';

console.log(Layout);

const Index = () => <Layout><NewsList /></Layout>;

Index.getInitialProps = async ({ store }) => {
  store.dispatch({
    type: 'news/init',
  });
  store.dispatch({
    type: 'news/getNewsType',
  });
};

export default withReduxSaga(Index);
