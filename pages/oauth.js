import React, { Component } from 'react';
import Router from 'next/router';

import { withReduxSaga } from '../store';

class Sign extends Component {
  componentDidMount() {
    Router.push({
      pathname: '/',
    });
  }
  render() {
    const { status } = this.props;
    return (<div>
      {status ? <h1>登录成功</h1> : <h1>登录异常，请重新登录</h1>}
    </div>);
  }
}

Sign.getInitialProps = async ({ store, query }) => {
  console.log(query);
  const { token } = query;
  if (token) {
    store.dispatch({
      type: 'user/save',
      payload: {
        token,
      },
    });
    return { status: true };
  } else {
    return { status: false };
  }
};

export default withReduxSaga(Sign);
