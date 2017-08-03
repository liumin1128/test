import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { formatNewsList } from '../../utils/format.js';

import Loading from '../Loading';
import Section from '../Section';

function mapStateToProps(state) {
  const { list = [] } = state.news;
  return {
    list: formatNewsList(list),
  };
}

export default connect(mapStateToProps)(({ list, dispatch }) => {
  function gotodetail(id) {
    dispatch({
      type: 'news/getDetail',
      payload: {
        id,
      },
    });
    Router.push({
      pathname: '/news/detail',
      query: { id },
    });
  }
  return (<div >
    <Section title="Matrix精选">
      {
        list.length === 0 ? <Loading /> :
        list.map(i => (<div
          className="item"
          onClick={gotodetail.bind(this, i._id)}
          key={i._id}
        >
          <h5>{i.title}</h5>
          <div className="meta">
            <div className="source">来自 {i.type}</div>
            <span />
            <div className="actions">
              <span className="like">
                <img className="icon" src="../../static/images/like.svg" alt="" />
                {i.readCount}
              </span>
              <span className="comment">
                <img className="icon" src="../../static/images/comment.svg" alt="" />
                {i.commentCount}
              </span>
            </div>
          </div>
        </div>))
      }
    </Section>
    <style jsx>{`
      .item h5 {
        margin: 0 0 5px;
        font-size: 16px;
        line-height: 1.5;
      }
      .meta {
        color: #9b9b9b;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
      }

      .actions, .like, .comment {
        display: flex;
        align-items: center;
      }
      .comment {
        margin-left: 20px;
      }
      .icon {
        width: 14px;
        height: 14px;
        margin-right: 4px;
      }
    `}</style>
  </div>);
});

