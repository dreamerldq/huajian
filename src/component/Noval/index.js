import React from 'react';
import BannerTitle from '../BannerTitle';
import styles from './index.scss';
import ViewType1 from './type1';
import ViewType2 from './type2';
import ViewType3 from './type3';

export default class Noval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novalData: [
        {
          id: 93,
          idx: 11,
          image: ['http://pic2.16pic.com/00/47/68/16pic_4768924_b.jpg'],
          link: '370126',
          remark: '新闻',
          status: 1,
          style: 1,
          title: '北欧风才不只是黑白灰 用一点点色彩就能提升家装温度',
          type: '乐活',
          view: 99999,
        },
        {
          id: 93,
          idx: 11,
          image: ['http://pic2.16pic.com/00/47/68/16pic_4768924_b.jpg'],
          link: '370126',
          remark: '新闻',
          status: 1,
          style: 2,
          title: '北欧风才不只是黑白灰 用一点点色彩就能提升家装温度',
          type: '乐活',
          view: 99999,
        },
        {
          id: 93,
          idx: 11,
          image: ['http://pic2.16pic.com/00/47/68/16pic_4768924_b.jpg', 'http://pic2.16pic.com/00/47/68/16pic_4768924_b.jpg', 'http://pic2.16pic.com/00/47/68/16pic_4768924_b.jpg'],
          link: '370126',
          remark: '新闻',
          status: 1,
          style: 3,
          title: '北欧风才不只是黑白灰 用一点点色彩就能提升家装温度',
          type: '乐活',
          view: 99999,
        },
      ],
    };
  }

  render() {
    return (
          <React.Fragment>
              <BannerTitle title="小说快报"></BannerTitle>
              <div className={styles.novel_block}>
                {this.state.novalData.map((item, index) => (
                        <div className={styles.novel_item} key={index}>
                            {item.style === 1
                              ? <ViewType1 item={item}></ViewType1>
                              : null
                            }
                            {item.style === 2
                              ? <ViewType2 item={item}></ViewType2>
                              : null
                            }
                            {item.style === 3
                              ? <ViewType3 item={item}></ViewType3>
                              : null
                            }
                        </div>
                ))}
              </div>
          </React.Fragment>
    );
  }
}
