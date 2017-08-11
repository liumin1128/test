import React from 'react';

export default ({ comments = [], onDel }) => (<div>
  <div className="comments">
    <h3 className="title">网友评论</h3>
    <div className="comments-box">
      {
        comments.length === 0 ?
          <div className="empty">喜欢，就留个评论吧~~</div> :
          comments.map(({
            _id,
            user = {},
            content,
          }) => (<div key={_id} className="comment">
            <img className="avatar" src={user.avatarUrl} alt="" />
            <section>
              <h5 className="name">{user.nickName}</h5>
              <div className="body">{content}</div>
              <div className="ext">
                <time>2小时前</time>
                <a onClick={onDel.bind(this, _id)}>删除</a>
              </div>
            </section>
          </div>))
      }
    </div>
  </div>
  <style jsx>{`
      .comments .avatar {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        float: left;
        margin-right: 10px;
        display: inline-block;
      }
      .comment section{
        display:block;
        overflow: hidden;
      }
      .comment .ext,a {
        font-size: 12px;
        font-size: 0.75rem;
        color: #9B9B9B;
        text-align: right;
      }
      .comment .ext time{
        float: left;
      }
      .comments .name {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.375;
        color: #4A4A4A;
        margin: 0 0 6px;
      }
      .comments .body {
        font-size: 14px;
        font-size: 0.875rem;
        color: #4A4A4A;
        line-height: 1.42857143;
        margin-bottom: 20px;
      }
      .comments .comment{
        adding-bottom: 12px;
        padding-top: 15px;
        padding: 20px;
      }
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

    `}
  </style>
</div>);

