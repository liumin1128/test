import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from './Content';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { detail } = this.props;
    return (<div>
      <Content {...detail} />
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
