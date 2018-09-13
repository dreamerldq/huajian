import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

class BasicContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('AAAAAA', this.props);
    return (
     <div>
       <h1>测试界面</h1>
     </div>
    );
  }
}
const mapStateToProps = ({ invoice }) => {
  console.log('QQQQQQ', invoice);
  return {
    invoice,
  };
};
export default connect(mapStateToProps)(BasicContent);
