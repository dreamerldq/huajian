import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, Tabs, WhiteSpace } from 'antd-mobile';
// import ViewType1 from '../../component/Noval/type1';
// import ViewType2 from '../../component/Noval/type2';
// import ViewType3 from '../../component/Noval/type3';
import HotContent from '../../component/HotContent';
import styles from './index.scss';
// import { request, api } from '../../api';
// import BannerTitle from '../../component/BannerTitle';
const tabs = [{ title: '热销榜' }, { title: '新书榜' }, { title: '恐怖榜' }, { title: '言情榜' }];
class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  back = () =>{
    window.history.go(-1)
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
        <div className={styles.top}>
        <span onClick={this.back} className={styles.goback}>{'<'}</span>
        <span>排行榜</span>
        </div>
          <Tabs
            tabs={tabs}
            initalPage={'t2'}
            tabBarPosition="left"
            tabDirection="vertical"
            animated={false}
          >
            <div className={styles.book_container}>
              <HotContent title={false} />
            </div>
            <div className={styles.book_container}> <HotContent title={false} /></div>
            <div className={styles.book_container}> <HotContent title={false} /></div>
          </Tabs>

        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<Rank />, document.getElementById("app")); //eslint-disable-line
