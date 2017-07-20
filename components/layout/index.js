export const Container = ({ children }) => (
  <div>
    <div className="header">
      <h1>header</h1>
    </div>
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
    <style global jsx>{`
      .container {
        margin: 0 auto;
      }

      @media (min-width: 48rem){
        .container {
          max-width: 1500px;
        }
        .row {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .row div {
          position: relative;
        }
      }

      @media (min-width: 78rem) {
        .container {
          max-width: 2400px;
          display: flex;
          flex-direction: row;
        }
        .row {
          flex-direction: row;
        }
        .main {
          width: 100% * 5/7;
        }

        .sider {
          width: 100% * 2/7;
        }
      }
    `}</style>
  </div>
);

export const Main = ({ children }) => (
  <div className="main">
    {children}
  </div>
);

export const Sider = ({ children }) => (
  <div className="sider">
    {children}
  </div>
);

