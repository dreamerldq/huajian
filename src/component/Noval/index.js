import React from 'react';
import axios from 'axios';
import BannerTitle from '../BannerTitle';
import styles from './index.scss';
import ViewType1 from './type1';
import ViewType2 from './type2';
import ViewType3 from './type3';
import { request, api, isIphoneX } from '../../api';
import novalBottom from '../../images/novalBottom.png';

export default class Noval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novalData: [],
    };
  }

  componentDidMount() {
    request.get(api.noval, {
      params: {
        start: 0,
        limit: 20,
        sorttype: 0,
      },
    }).then((res) => {
      this.setState({
        novalData: res.data.data,
      });
    });
  }

  render() {
    return (
          <React.Fragment>
              <BannerTitle url="/noval.html" title="小说快报">
                    更多>
              </BannerTitle>
              <div className={styles.novel_block}>
                {this.state.novalData.map((item, index) => (
                        <div className={styles.novel_item} key={index}>
                            {item.style === 1
                              ? <a href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${item.id}.html`}><ViewType1 item={item}></ViewType1></a>
                              : null
                            }
                            {item.style === 2
                              ? <a href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${item.id}.html`}><ViewType2 item={item}></ViewType2></a>
                              : null
                            }
                            {item.style === 3
                              ? <a href={`http://t2118.xintiaotime.com/index.php/cms/column/book/id/${item.id}.html`}><ViewType3 item={item}></ViewType3></a>
                              : null
                            }
                        </div>
                ))}
              </div>
              <a href="/noval.html"><img className={styles.moreRead} src={novalBottom}/></a>
          </React.Fragment>
    );
  }
}
