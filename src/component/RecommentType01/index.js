import React from 'react';
import BannerTitle from '../BannerTitle';
import styles from './index.scss';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    console.log('item', item);
    return (
        <div className={styles.rank_article}>
            <div className={styles.article_container} key={item.id}>
                <img className={styles.article_image} src={`https://t3908.xintiaotime.com${item.image}`}></img>
                <div className={styles.article_texts}>
                    <div>{item.title}</div>
                    <div className={styles.title}>{item.desc}</div>
                    <div>作者：{item.zuozhe}</div>
                    {/* <div className={styles.article_type}>{item.type}</div> */}
                </div>
            </div>
        </div>
    );
  }
}
