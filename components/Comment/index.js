import React from 'react';

export default ({ comments = [] }) => (<div>
  <div className="comments">
    <h3 className="title">网友评论</h3>
    <div className="comments-box">
      {
        comments.length === 0 ?
          <div className="empty">喜欢，就留个评论吧~~</div> :
          comments.map(i => (<div>
            <img src={i} alt="" />
          </div>))
      }
    </div>
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
    .comments-box {

    }
    .comments-box .empty {
      text-align: center;
      font-size: 12px;
      color: #848484;
    }
  `}</style>
</div>);
