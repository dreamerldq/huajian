import React from 'react';
import { Carousel } from 'antd-mobile';

export default class Lunbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    };
  }

  render() {
    return (

          <Carousel
            autoplay={true}
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={'http://pic2.16pic.com/00/47/68/16pic_4768924_b.jpg'}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                />
              </a>
            ))}
          </Carousel>

    );
  }
}
