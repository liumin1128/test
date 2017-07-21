import React from 'react';

export default ({ children }) => (
  <div className="container">
    <div className="row">
      {children}
    </div>

    <style jsx>{`
      .container {
        margin: 0 auto;
        max-width: 1100px;
      }
      .row div {
        position: relative;
      }
      @media (min-width: 1110px){
        .row {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
      }
    `}</style>
  </div>
);
