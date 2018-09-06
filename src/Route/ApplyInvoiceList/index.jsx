import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import { dataSource, columns } from './data';

class ApplyInvoiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table
       dataSource={dataSource}
       columns={columns}
       bordered
       rowKey={record => record.id}/>
    );
  }
}
export default connect()(ApplyInvoiceList);
