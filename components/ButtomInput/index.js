import React from 'react';

export default () => (<div>
  <div className="bottom-input">
    <input type="text" />
    <div className="submit">
      <img className="icon" src="http://ojyyvddgd.bkt.clouddn.com/sent.svg" alt="发送" />
    </div>
  </div>
  <style jsx>{`
    .bottom-input {
      width: 100%;
      background: #fff;
      display: flex;
      padding: 4px 0;
      position: fixed;
      bottom: 0;
      left: 0;
      border-top: 1px solid #dbe2e8;
    }
    .bottom-input input {
      width: 100%;
      padding: 5px;
      margin-left: 4px;
      background: rgba(0,0,0,0.05);
      border: none;
      border-radius: 5px;
    }
    .bottom-input .submit {
      width: 50px;
      height: 35px;
      display: flex;
    }
    .bottom-input .submit img {
      width: 25px;
      height: 25px;
      margin-left: 6px;
      margin-top: 4px;
    }
  `}</style>
</div>);
