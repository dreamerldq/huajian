import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import { dataSource, columns } from './data';

class ApplyInvoiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('wwwww', this.props);
    return (
      <Table
       dataSource={this.props.invoice.invoices}
       columns={columns}
       bordered
       rowKey={record => record.id}/>
    );
  }
}
const mapStateToProps = ({ invoice }) => ({
  invoice,
});
export default connect(mapStateToProps)(ApplyInvoiceList);
