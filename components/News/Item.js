import React from 'react';

export default ({ title, content, type, cover, readCount, commentCount }) => (<div className="item" >
  <div className="cover" style={{ backgroundImage: `url(${cover})` }} />
  <div className="box">
    <h3 className="title">{title}</h3>
    <summary className="desc">{content}</summary>
    <footer className="meta">
      <div className="source">来自 {type}</div>
      <span />
      <div className="actions">
        <span className="like">
          <img className="icon" src="../../static/images/like.svg" alt="" />
          {readCount}
        </span>
        <span className="comment">
          <img className="icon" src="../../static/images/comment.svg" alt="" />
          {commentCount}
        </span>
      </div>
    </footer>
  </div>
  <style jsx>{`
    .item {
      background: #fff;
      margin-bottom: 16px;
      margin: 16px 0;
      box-shadow: 0 1px 3px rgba(46,61,73,.08);
      border: 1px solid #dbe2e8;
      border-width: 1px 0 1px 0;
    }

    .cover {
      width: 100%;
      height: 240px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 120% auto;
    }
    .box {
      padding: 20px;
    }

    .title {
      font-size: 20px;
      line-height: 1.4;
      margin: 0 0 20px;
      font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif;

    }
    .desc {
      font-size: 14px;
      line-height: 1.85;
      color: #4a4a4a;
    }
    .meta {
      color: #9b9b9b;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 22px;
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

    @media (min-width: 768px) {
      .cover {
        height: 240px;
        background-size: 100% auto;
      }
      .item {
        border-radius: 3px;
        overflow: hidden;
        border-width: 1px;
      }
      .title {
        font-size: 24px;
        line-height: 1.5;
      }
      .desc {
        color: #4a4a4a;
        line-height: 1.625;
        font-size: 16px;
        margin: 0;
      }
    }

  `}</style>
</div>);
