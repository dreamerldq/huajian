import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, Tabs, WhiteSpace } from 'antd-mobile';
// import ViewType1 from '../../component/Noval/type1';
// import ViewType2 from '../../component/Noval/type2';
// import ViewType3 from '../../component/Noval/type3';
import HotContent from '../../component/HotContent';
import RankList from '../../component/RecommentType02/index.js';
import styles from './index.scss';
import { request, api } from '../../api';
// import BannerTitle from '../../component/BannerTitle';
const tabs = [{ title: '热销榜' }, { title: '新书榜' }, { title: '恐怖榜' }, { title: '言情榜' }];
class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rankData: []
    };
  }
  componentDidMount() {
    request.get(api.week)
      .then((res) => {
        this.setState({
          rankData: res.data,
        });
      });
  }
  back = () =>{
    window.history.go(-1)
  }
  render() {
    console.log(this.state.rankData)
    return (
      <React.Fragment>
        <div className={styles.container}>
        <div className={styles.top}>
        <span onClick={this.back} className={styles.goback}><img src="https://novel.in.xintiaotime.com/public/static/cms/img/hj_back.png"/></span>
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
             {this.state.rankData.map((item, index  ) =>{
               return <RankList last={this.state.rankData.length} index={index+1} key={item.id} item={item}></RankList>
             })}
            </div>
            <div className={styles.book_container}>新书榜</div>
            <div className={styles.book_container}>恐怖榜</div>
          </Tabs>

        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<Rank />, document.getElementById("app")); //eslint-disable-line
