import React from 'react';

export default () => (<div>
  <div className="comments">
    <h3 className="title">网友评论</h3>
  </div>
  <style jsx>{`
    .comments {
      border-top: 1px rgba(0,0,0,0.1) solid;
    }
    .comments .title {
      width: 100%;
      font-size: 16px;
      text-align: center;
      margin: 20px 0 20px;
    }
  `}</style>
</div>);
