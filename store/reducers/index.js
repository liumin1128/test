import { combineReducers } from 'redux';

import common from './common.js';
import news from './news.js';
import detail from './detail.js';
import user from './user.js';

const reducer = combineReducers({
  common,
  detail,
  news,
  user,
});

export default reducer;
