import { combineReducers } from 'redux';

import common from './common.js';
import news from './news.js';
import user from './user.js';

const reducer = combineReducers({
  common,
  news,
  user,
});

export default reducer;
