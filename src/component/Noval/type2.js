import React from 'react';
import styles from './index.scss';

export default class ViewType2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
          <React.Fragment>
            <div className={styles.view_type_3}>
                    <div className={styles.container3}>
                    <div className={styles.title}>
                            {item.title}
                    </div>
                    <div className={styles.type_container3}>
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
                    {item.image.map((images, index) => (
                                      <img key={index} className={styles.viewImage1} src={images}></img>
                    ))}
                     </div>
          </React.Fragment>
    );
  }
}
