import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

class ApplyInvoiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <h1>申请列表</h1>
      </div>
    );
  }
}
export default connect()(ApplyInvoiceList);
