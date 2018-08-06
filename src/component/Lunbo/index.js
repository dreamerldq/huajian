import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './index.scss';
import img from '../../images/bannerBackground.png';

export default class Lunbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: '4rem',
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
        <Carousel className="space-carousel"
          frameOverflow="hidden"
          cellSpacing={5}
          slideWidth={0.95}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
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

        >

          {(bannerData || []).map((val, index) => (
            <a
              key={val}
              href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${val.id}.html`}
              style={{
                display: 'block',
                position: 'relative',
                top: -15,
                height: this.state.imgHeight,
              }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={`https://t3908.xintiaotime.com${val.image}`}
                alt=""
                className={styles.image}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: '4rem' });
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
