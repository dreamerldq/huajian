import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './index.scss';
import img from '../../images/bannerBackground.png';

export default class Lunbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    const { bannerData } = this.props;
    console.log('QQQQQQQ', bannerData);
    return (
      <div style={{ width: '10rem' }}>
        <div className={styles.topContainer}>

      <div className={styles.navbar}>
        <ul>
          <a><li className={styles.yellowLi}>首页</li></a>
          <a><li>书城</li></a>
          <a><li>搜索</li></a>
          <a><li>充值</li></a>
          <a><li>个人中心</li></a>

        </ul>
      </div>
        <img className={styles.bannerBackground} src={img}/>
        <div className={styles.carousel}>
        <Carousel className={styles.spaceCarousel}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.9}
          autoplay
          infinite
          dotStyle={
            {
              width: '0.61rem',
              height: '0.09rem',
              borderRadius: '0px',
            }
          }
          dotActiveStyle={
            {
              width: '0.61rem',
              height: '0.09rem',
              borderRadius: '0px',
            }
          }
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => this.setState({ slideIndex: index })}
        >
          {(bannerData || []).map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"

              style={{
                display: 'block',
                // position: 'relative',
                // top: this.state.slideIndex === index ? -10 : 0,
                // height: this.state.imgHeight,
                // boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`https://t3908.xintiaotime.com${val.image}`}
                className={styles.image}
                alt=""
                // style={{ width: '100%' }}
                onLoad={() => {
                  // fire window resize event to change height
                  // window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        </div>

        </div>


      </div>

    );
  }
}
