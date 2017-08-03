import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch({ type: 'news/init' });
  }
  render() {
    const { detail } = this.props;
    return (<div>
      <Content {...detail} />
      <Input onSent={this.sentComment} />
      <Zan onZan={this.zan} />
      <Comment />
    </div>);
  }
}

function mapStateToProps(state) {
  const { detail = {} } = state.news;
  return {
    detail,
  };
}

export default connect(mapStateToProps)(Detail);
