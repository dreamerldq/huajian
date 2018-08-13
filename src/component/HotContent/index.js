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
    const { title } = this.props;
    return (
        <React.Fragment>
          <div className={styles.hot_container}>
          { title ? <BannerTitle title="本周热荐"></BannerTitle> : null}
          <div className={styles.container}>
              {
                  this.state.commendData.map((item, index) => (
                    <a key={index} href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${item.id}.html`}>
                       <RecommendType01 index={index} last={this.state.commendData.length - 1} item={item}></RecommendType01>
                    </a>

                  ))
              }
          </div>
          </div>
        </React.Fragment>

    );
  }
}
