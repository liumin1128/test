import React from 'react';
import styles from './Index.less';
import likeIcon from './images/like.svg';
import commentIcon from './images/comment.svg';

const Index = ({ title, content, type, cover, readCount, commentCount, goToUrl, id }) => (
  <div className={styles.item} onClick={goToUrl.bind(this, id)}>
    <div className={styles.cover} alt="" style={{ backgroundImage: `url(${cover})` }} />
    <div className={styles.box}>
      <h3 className={styles.title}>{title}</h3>
      <summary className={styles.desc}>{content}</summary>
      <footer className={styles.meta}>
        <div className={styles.source}>
          出自 {type}
        </div>

        <span />
        <div className={styles.actions}>
          <span className={styles.like}>
            <img className={styles.icon} src={likeIcon} alt="" />
            {readCount}
          </span>
          <span className={styles.comment}>
            <img className={styles.icon} src={commentIcon} alt="" />
            {commentCount}
          </span>
        </div>
      </footer>
    </div>
  </div>
);

export default Index;
