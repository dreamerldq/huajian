import React from 'react';
import styles from './index.scss';

export default class BannerTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
            <React.Fragment>
                <div className={styles.banner}>
                <div className={styles.text}>
                {title}
                  </div>
              </div>
            </React.Fragment>
    );
  }
}
