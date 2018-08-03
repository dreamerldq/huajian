import React from 'react';
import BannerTitle from '../BannerTitle';
import { request, api } from '../../api';
import apiData from './index.json';
import RecommendType01 from '../RecommentType01';

console.log('QQQQQQQ', apiData);
export default class HotContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commendData: [],
    };
  }


  componentDidMount() {
    request.get(api.freeRead)
      .then((res) => {
        console.log('限时免费', res);
        this.setState({
          commendData: res.data.slice(0, 6),
        });
      });
  }


  render() {
    return (
        <React.Fragment>
        <BannerTitle title="本周热荐"></BannerTitle>
          <div>
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
