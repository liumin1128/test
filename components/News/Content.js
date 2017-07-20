export default ({
  title, photos = [], content, zanCount, from, updatedAt
}) => <div className="box">
  <img src={photos && photos[0]} alt="" className="banner"/>
  <h1 className="title">{title}</h1>
  <div className="meta">
    <span>{zanCount}</span>
    <span>{from}</span>
    <span>{updatedAt}</span>
  </div>
  <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  <style>{`
  .box {
    padding: 20px;
    background: #fff;
  }
  img {
    width: 100%;
  }
  .banner {
    margin-bottom: 20px;
  }
  h1 {
    font-size: 24px;
    line-height: 1.375;
    margin: 0 0 15px 0;
  }
  .meta {
    color: #4a4a4a;
    font-size: 12px;
    margin-bottom: 15px;
  }
  .meta span {
    margin-right: 5px;
  }
  .content p {
    margin: 0 0 10px 0;
    line-height: 26px;
    display: block;
    color: #4a4a4a;
    word-break: normal;
    word-wrap: break-word;
    font-weight: 400;
  }
  .content img {
    margin-bottom: 20px;
  }
  `}</style>
</div>
