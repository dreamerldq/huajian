import React from 'react';
import styles from './index.scss';
import { request, api } from '../../api';
import icon_coin from '../../images/icon_coin.png';
import icon_noval from '../../images/icon_noval.png';
import icon_rank from '../../images/icon_rank.png';
import icon_time from '../../images/icon_time.png';

// const images = [
//   {
//     image: icon_coin,
//     title: '签到领书币',
//   },
//   {
//     image: icon_noval,
//     title: '小说快报',
//   },
//   {
//     image: icon_rank,
//     title: '排行榜',
//   },
//   {
//     image: icon_time,
//     title: '限时0元读',
//   },
// ];
export default class CicleNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    request.get(api.icon)
      .then((res) => {
        this.setState({
          images: res.data,
        });
      });
  }

  render() {
    const { images } = this.state;
    return (
          <div className={styles.container}>
           {
               images.map((item, index) => (
                   <div className={styles.nav} key={index}>
                       <a href={item.src}><img src={`http://t2118.xintiaotime.com${item.image}`}/></a>
                       <span>{item.title}</span>
                   </div>
               ))
           }
          </div>
    );
  }
}
