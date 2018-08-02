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
                <view className={styles.banner}>
        <view className={styles.text}>{title}</view>

    </view>
            </React.Fragment>
    );
  }
}
