import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Flex, WingBlank } from 'antd-mobile';
import styles from './index.scss';
import Lunbo from '../../component/Lunbo';
// const wx = require('weixin-js-sdk');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {
    return (
            <React.Fragment >

              <div className={styles.container}>
             <WingBlank size='md'>
              <Lunbo></Lunbo>
                <div className={styles.boxGroup}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                </div>
              </WingBlank>
              </div>

            </React.Fragment>


    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app')); //eslint-disable-line
