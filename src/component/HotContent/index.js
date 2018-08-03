import React from 'react';
import BannerTitle from '../BannerTitle';
import { request, api } from '../../api';
import apiData from './index.json';
import RecommendType01 from '../RecommentType01';
import styles from './index.scss';

export default class HotContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commendData: [],
    };
  }


  componentDidMount() {
    request.get(api.week)
      .then((res) => {
        this.setState({
          commendData: res.data,
        });
      });
  }


  render() {
    return (
        <React.Fragment>
        <BannerTitle title="本周热荐"></BannerTitle>
          <div className={styles.container}>
              {
                  this.state.commendData.map((item, index) => (
                          <RecommendType01 key={index} item={item}></RecommendType01>
                  ))
              }
          </div>
        </React.Fragment>

    );
  }
}
