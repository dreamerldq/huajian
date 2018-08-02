import React from 'react';
import styles from './index.scss';

export default class ViewType3 extends React.Component {
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
                                    <div className={styles.image_group}>
                                    {item.image.map((images, index) => (
                                      <img key={index} className={styles.viewImage1} src={images}></img>
                                    ))}
                                    </div>

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
                                        {item.view}阅读
                                        </div>
                                    </div>
                              </div>
          </React.Fragment>
    );
  }
}
