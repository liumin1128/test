import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Zan from '../Zan';
import Comment from '../Comment';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this);
    this.props.dispatch({ type: 'news/init' });
  }
  render() {
    const { detail } = this.props;
    return (<div>
      <Comment />
      <Content {...detail} />
      <Zan />
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
