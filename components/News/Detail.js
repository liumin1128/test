import React from 'react';
import { connect } from 'react-redux';

import Content from './Content';

function mapStateToProps(state) {
  const { detail = {} } = state.news;
  return {
    detail,
  };
}

export default connect(mapStateToProps)(({ detail }) => {
  return (<div>
    <Content {...detail} />
  </div>);
});

