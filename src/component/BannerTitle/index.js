import React from 'react';
import styles from './index.scss';

export default class BannerTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, url } = this.props;
    return (
            <React.Fragment>
                {/* <div className={styles.banner}>
                <div className={styles.text}>
                {title}
                  </div>
              </div> */}

                <div className={styles.banner1}>
                    <div className={styles.text1}>
                    {title}
                    </div>
                    {

                    React.Children.map(this.props.children, child => <a className={styles.readMore} href={url}>
                      <span>{child}</span>
                    </a>)

                        }
                </div>

            </React.Fragment>
    );
  }
}
