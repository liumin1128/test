import React from 'react';
import { withReduxSaga } from '../../store';

import Layout from '../../components/Layout';
import NewDetail from '../../components/News/Detail';

const Index = () => <Layout><NewDetail /></Layout>;

Index.getInitialProps = async ({ query, store }) => {
  store.dispatch({
    type: 'news/getDetail',
    payload: query,
  });
  store.dispatch({
    type: 'news/getNewsType',
  });
};

export default withReduxSaga(Index);

