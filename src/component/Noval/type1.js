import React from 'react';
import styles from './index.scss';

export default class ViewType1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
          <React.Fragment>
            <div className={styles.novel_content}>
                                    <div className={styles.title}>
                                        {item.title}
                                    </div>
                                   {item.image.map((images, index) => (
                                      <img key={index} className={styles.viewImage1} src={`https://t3908.xintiaotime.com${images}`}></img>
                                   ))}
                                    <div className={styles.type_container}>
                                        {
                                            item.remark
                                              ? <div className={styles.book_type}>
                                                {item.remark}
                                            </div> : null
                                        }
                                        {
                                            item.type
                                              ? <div className={styles.content_type}>
                                                {item.type}
                                            </div> : null
                                        }
                                        <div className={styles.readCount}>
                                            {item.read}阅读
                                        </div>
                                    </div>
                              </div>
          </React.Fragment>
    );
  }
}
