import React from 'react';
import BannerTitle from '../BannerTitle';
import styles from './index.scss';

const images = {
  first: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_first.png',
  second: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_second.png',
  third: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_third.png',
};
export default class ReconmmentType02 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, index } = this.props;
    return (
        <div className={styles.rank_article}>
            <div className={styles.article_container} key={item.id}>
                <img className={styles.article_image} src={`https://t3908.xintiaotime.com${item.image}`}></img>
                <div className={styles.article_texts}>
                   {
                    (() => {
                      switch (index) {
                        case 1:
                          return <div className={styles.title}><img className={styles.images} src={images.first}/>{item.title}</div>;
                          break;
                        case 2:
                          return <div className={styles.title}><img className={styles.images} src={images.second}/>{item.title}</div>;
                          break;
                        case 3:
                          return <div className={styles.title}><img className={styles.images} src={images.third}/>{item.title}</div>;
                          break;
                        default: return <div className={styles.title}><span className={styles.normal}>{index}.</span>{item.title}</div>;
                      }
                    })()
                   }
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
