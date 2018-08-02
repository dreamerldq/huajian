import React from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import ViewType1 from '../../component/Noval/type1';
import ViewType2 from '../../component/Noval/type2';
import ViewType3 from '../../component/Noval/type3';
import styles from '../../component/Noval/index.scss';
import {request, api} from '../../api'
class Noval extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource,
      novalData:[],
      isLoading: true,
      start: 0,
      height: document.documentElement.clientHeight,
    };
  }
  requestNoval = () =>{
    const {start, novalData} = this.state
    request.get(api.noval, {
      params: {
        start: start,
        limit: 20,
        sorttype: 0,
      },
    }).then((res) => {
      const newData = [...novalData, ...res.data.data]
      this.setState({
        novalData: newData,
        start: newData.length,
        dataSource: this.state.dataSource.cloneWithRows(newData),
    isLoading: false,
      });
    });
  }
  componentDidMount() {
      this.requestNoval()
    }

  onEndReached = (event) =>{
    if (this.state.isLoading) {
      return;
    }
    this.requestNoval()
  }

  render() {
    const row = (rowData, rowID) => (
        <div className={styles.novel_block}>
        <div className={styles.novel_item} key={rowData.id}>
                {rowData.style === 1
                  ? <ViewType1 item={rowData}></ViewType1>
                  : null
                }
                {rowData.style === 2
                  ? <ViewType2 item={rowData}></ViewType2>
                  : null
                }
                {rowData.style === 3
                  ? <ViewType3 item={rowData}></ViewType3>
                  : null
                }
            </div>
          </div>
    );
    return (
            <React.Fragment>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={row}
                style={{
                  height: this.state.height,
                  overflow: 'auto',
                }}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
              />
            </React.Fragment>
    );
  }
}
ReactDOM.render(<Noval/>, document.getElementById('app'));//eslint-disable-line
