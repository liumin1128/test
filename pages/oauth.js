import React from 'react';
import { withReduxSaga } from '../store';

const Sign = ({ status }) => (<div>
  {status ? <h1>登录成功</h1> : <h1>登录异常，请重新登录</h1>}
</div>);

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
