import React from 'react';
import BannerTitle from '../BannerTitle';
import { request, api } from '../../api';
import styles from './index.scss';
import limitfree from '../../images/limitfree.png';

export default class HotContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freeData: [],
    };
  }

  componentDidMount() {
    request.get(api.freeRead)
      .then((res) => {
        console.log('限时免费', res);
        this.setState({
          freeData: res.data.slice(0, 6),
        });
      });
  }

  render() {
    return (
        <React.Fragment>
        <BannerTitle url="http://t2118.xintiaotime.com/index.php/cms/column/bookfree.html" title="限时免费">
            更多>
        </BannerTitle>
        <div className={styles.limit_container}>
            {
                this.state.freeData.map((item, index) => (

                <div key={item.id} className={styles.limit_book}>
                <a href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${item.id}.html`}>
                <div className={styles.bookBlock}>
                <div className={styles.image_group}>
                        <img className={styles.bookimg} src={`https://t3908.xintiaotime.com${item.image}`}></img>
                        <img className={styles.limitfree} src={limitfree}></img>
                </div>

                <span className={styles.hotTitle}>{item.title}</span>
                </div>
                </a>

            </div>

                ))
            }
             </div>
        </React.Fragment>

    );
  }
}
