import React from 'react';
import BannerTitle from '../BannerTitle';
import styles from './index.scss';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
        <div className={styles.rank_article}>
            <div className={styles.article_container} key={item.id}>
                <img className={styles.article_image} src={`https://t3908.xintiaotime.com${item.image}`}></img>
                <div className={styles.article_texts}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.des}>{item.desc}</div>
                    <div className={styles.bottomIntro}>
                        <div className={styles.author}>作者：{item.zuozhe}</div>
                        <div className={styles.typeGroup}>
                            <span>{item.xstype}</span>
                            <span>{item.tstype}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}
