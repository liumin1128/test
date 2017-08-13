import Router from 'next/router';
import { GET_USERINFO } from '../../constants/api.js';
import request from '../../utils/fetch.js';
import store from '../../store';

export async function userLogin({ payload }) {
  try {
    if (payload.token) {
      const data = await request(GET_USERINFO, payload);
      await store.dispatch({
        type: 'user/save',
        payload: {
          ...data.body,
          ...payload,
        },
      });
      await Router.push({
        pathname: '/',
      });
    }
  } catch (error) {
    console.log(error);
  }
}
