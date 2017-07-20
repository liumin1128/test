import {connect} from 'react-redux'
import Waypoint from 'react-waypoint';
import Router from 'next/router'

import { formatNewsList } from '../../utils/format.js'

import Loading from '../Loading'
import Item from './Item'

function mapStateToProps(state) {
  const { list = [] } = state.news;
  return {
    list: formatNewsList(list),
  };
}

export default connect(mapStateToProps)(({list, dispatch}) => {
  function gotodetail(id) {
    console.log(id)
    dispatch({
      type: 'news/getDetail',
      payload: {
        id
      }
    })
    Router.push({
      pathname: '/detail',
      query: { id }
    })
  }
  function loadmore() {
    const length = list.length
    console.log(length / 10)
    dispatch({
      type: 'news/loadmore',
      payload: {
        page: parseInt(length / 10) + 1,
      }
    })
  }
  return (<div>
    {
      list.map(i => <div onClick={gotodetail.bind(this, i.id)} key={i.id}>
        <Item {...i}></Item>
      </div>)
    }
    <Waypoint
      onEnter={loadmore}
      onLeave={() => {
        console.log('onLeave');
      }}
    >
      <span><Loading /></span>
    </Waypoint>
  </div>);
});


