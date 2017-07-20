import { combineReducers } from 'redux';

import common from './common.js';
import news from './news.js';

const reducer = combineReducers({
  common,
  news,
});

export default reducer;
