import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Flex, WingBlank } from 'antd-mobile';
import styles from './index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  showName() {
    console.log('LIDANQIU');
  }

  render() {
    return (
            <React.Fragment>
                <WingBlank size='md'>
                <Button type="primary" onClick={this.showName}>点击</Button>
            <div className={styles.box}>
            box
            </div>
            <Flex>
            <Flex.Item>111</Flex.Item>
            <Flex.Item>222</Flex.Item>
            <Flex.Item>111</Flex.Item>
            <Flex.Item>222</Flex.Item>
            </Flex>
                </WingBlank>
                 <h1>这是首页</h1>
            </React.Fragment>


    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app')); //eslint-disable-line
