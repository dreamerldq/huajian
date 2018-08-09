import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Flex, WingBlank } from 'antd-mobile';
import axios from 'axios';
import styles from './index.scss';
import Lunbo from '../../component/Lunbo';
import Noval from '../../component/Noval';
import Recommond from '../../component/recommend';
import HotContent from '../../component/HotContent';
import { api, request, isIphoneX } from '../../api';
import LimitRead from '../../component/LimitRead';
import CicleNav from '../../component/CicleNav';
import Tabbar from '../../component/Tabbar';

const wx = require('weixin-js-sdk');

console.log('是否是iphoneX', isIphoneX());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: {},
    };
  }

  componentDidMount() {
    // axios.get('https://novel.xintiaotime.com/index.php/agent/hjgetinfo/getinfo.html')
    //   .then((res) => {
    //     console.log('success', res);
    //     const { data } = res;
    //     wx.config({
    //       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //       appId: data.appId, // 必填，公众号的唯一标识
    //       timestamp: data.timestamp, // 必填，生成签名的时间戳
    //       nonceStr: data.nonceStr, // 必填，生成签名的随机串
    //       signature: data.signature, // 必填，签名
    //       jsApiList: ['getLocation'], // 必填，需要使用的JS接口列表
    //     });
    //     wx.ready(() => {
    //       wx.getLocation({
    //         type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    //         success(res1) {
    //           const { latitude } = res1; // 纬度，浮点数，范围为90 ~ -90
    //           const { longitude } = res1; // 经度，浮点数，范围为180 ~ -180。
    //           const { speed } = res1; // 速度，以米/每秒计
    //           const { accuracy } = res1; // 位置精度
    //           console.log('PPPPP', res1);
    //         },
    //       });
    //       // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    //     });
    //     wx.error(() => {
    //       // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    //     });
    //   });
    request.get(api.index)
      .then((res) => {
        this.setState({
          allData: res.data,
        });
      });
  }


  render() {
    return (
            <React.Fragment >
              <div className={styles.container}>
              <Lunbo bannerData={this.state.allData.banner_list}></Lunbo>
              <CicleNav></CicleNav>
              <Recommond zhubianData={this.state.allData.zhubian_list} count={this.state.allData.count}></Recommond>
              <LimitRead></LimitRead>
              <HotContent title={true} ></HotContent>
                <Noval></Noval>
                <Tabbar />
              </div>

            </React.Fragment>


    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app')); //eslint-disable-line
