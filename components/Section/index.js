import React from 'react';

export default ({ children, title }) => (<div >
  <dl className="section">
    <dt>
      <h3>{title}</h3>
    </dt>
    <dd>
      {children}
    </dd>
    <style jsx>{`
      .section {
        margin: 0 0 20px;
      }
      .section dt {
        padding-bottom: 6px;
        border-bottom: 1px solid #e9e9ea;
        margin-bottom: 15px;
        display: block;
        height: 20px;
      }

      .section h3 {
        font-size: 14px;
        line-height: 1.42857143;
        margin: 0;
        position: relative;
        color: #292525;
        float: left;
        font-weight: bold;
      }

      .section h3 :after {
        content: " ";
        display: block;
        height: 27px;
        width: 100%;
        border-bottom: 1px solid #292525;
        position: absolute;
        left: 0;
        top: -1px;
      }

      .section dd {
        margin: 0;
        padding: 0;
      }
  `}</style>
  </dl>
</div>);
