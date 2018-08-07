import React from 'react';
import styles from './index.scss';
import { request, api } from '../../api';

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
