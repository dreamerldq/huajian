import React from 'react';
import { request, api } from '../../api';
import BannerTitle from '../BannerTitle';
import styles from './index.scss';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekHotData: [],
    };
  }


  render() {
    const { zhubianData, count } = this.props;
    console.log('主编list', zhubianData, count);
    return (
        <React.Fragment>
             <BannerTitle title="编辑推荐"></BannerTitle>
             <div className={styles.recommend}>
             <div className={styles.images}>
             {

                    (zhubianData || []).map((book, index) => (
                      count > index
                        ? <div key={book.id} className={styles.image}>
                              <a href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${book.id}.html`}>
                        <img src={`https://t3908.xintiaotime.com${book.image}`}></img>
                        </a>
                        <span>{book.title}</span>
                        </div>

                        : null
                    ))
            }
                </div>
                {
                (zhubianData || []).map((book, index) => (

                  index >= count
                    ? <div className={styles.box} key={book.id} >
                        <a href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${book.id}.html`}>
                        <div className={styles.desc}>{book.desc}</div>
                        <div className={styles.text}>
                        <div className={styles.title}>
                            <span>《{book.title}》</span>
                        - {book.zuozhe}
                        </div>
                        <div className={styles.readCount}>{book.view}阅读</div>
                        </div>
                        </a>
                    </div> : null

                ))
                }
             </div>
        </React.Fragment>

    );
  }
}
