import {connect} from 'react-redux'
import Waypoint from 'react-waypoint';
import Router from 'next/router'

import { formatNewsList } from '../../utils/format.js'

import Loading from '../Loading'
import Content from './Content'

function mapStateToProps(state) {
  const { detail = {} } = state.news;
  return {
    detail,
  };
}

export default connect(mapStateToProps)(({ detail, dispatch}) => {
  return (<div>
    <Content {...detail} />
  </div>);
});


