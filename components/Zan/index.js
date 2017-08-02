import React from 'react';

export default ({ avatars = [] }) => (<div>
  <div className="zan">
    <div className="zan-button">赞</div>
    <div className="avatars">
      {
        avatars.length === 0 ?
          <div className="zan-empty">有赞，你不点一下吗？</div> :
          avatars.map(i => (<div>
            <img src={i} alt="" />
          </div>))
      }
    </div>

  </div>
  <style jsx>{`
    .zan {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
    }
    .zan-button {
      width: 40px;
      height: 40px;
      font-size: 12px;
      background: #fede32;
      border-radius: 100px;
      line-height: 40px;
      text-align: center;
      transition: .3s;
      border: 1px #fff solid;
      box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
      transition: 0.3s;
    }
    .zan-button :active {
      transform: scale(1.1);
    }
    .avatars {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      min-height: 40px;
      background: rgba(0,0,0,0.05);
      border-radius: 5px;
      width: 100%;
    }
    .zan-empty {
      font-size: 12px;
      color: #848484;
    }
    .avatar {
      width: 30px;
      height: 30px;
      margin: 5px;
    }
    .avatar image {
      width: 100%;
      height: 100%;
      border-radius: 200px;
    }
  `}</style>
</div>);
