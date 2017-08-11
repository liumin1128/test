import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import Content from './Content';
import Zan from '../Zan';
import Comment from '../Comment';
import Input from '../ButtomInput';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.zan = () => {
      const item = this.props.detail._id;
      this.props.dispatch({ type: 'detail/zan', payload: { item } });
    };
    this.sentComment = (content) => {
      const item = this.props.detail._id;
      this.props.dispatch({ type: 'detail/addComment', payload: { item, content } });
    };
    this.delComment = (id) => {
      const item = this.props.detail._id;
      this.props.dispatch({ type: 'detail/delComment', payload: { id, item } });
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    Router.prefetch('/');
    const item = this.props.detail._id;
    this.props.dispatch({ type: 'news/init' });
    this.props.dispatch({ type: 'detail/init', payload: { item } });
  }
  render() {
    const { detail, zanList = [], commentList = [] } = this.props;
    return (<div>
      <Content {...detail} />
      <Input onSent={this.sentComment} />
      <Zan list={zanList} onZan={this.zan} />
      <Comment comments={commentList} onDel={this.delComment} />
    </div>);
  }
}

function mapStateToProps(state) {
  const { detail = {} } = state.news;
  const { zanList = [], commentList } = state.detail;
  return {
    detail,
    zanList,
    commentList,
  };
}

export default connect(mapStateToProps)(Detail);
