import React from 'react';
import { connect } from 'dva';
import { Table,Popconfirm, Button } from 'antd';
import { columns } from './data';
import moment from 'moment'
const tableColumns =columns.concat([
    {
      title: '应收余额',
      dataIndex: 'balance',
      key: 'balance',
      render(text, record){
        const balance = record.money - record.money_received
        return(
          <span>{balance}</span>
        )
      }
    },
    {
      title: '状态',
      dataIndex: 'pay_type',
      key: 'pay_type',
      render(text,record){
        return(
          <span>{text}</span>
        )
      }
    },
    {
      title: '时间',
      dataIndex: 'create_time',
      key: 'create_time',
      render:(text) =>{
        const data = moment(text).format("YYYY-MM-DD")
        return(
        <span>{data}</span>
      )}
    }
  ])
class AffirmInvoiceList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("AAAA", this.props.affirmInvoice)
    return (
      <Table
       dataSource={this.props.affirmInvoice.affirmInvoiceList}
       columns={tableColumns}
       bordered
       rowKey={(record)=>{
         return record.id
       }}/>
    );
  }
}
const mapStateToProps = ({ affirmInvoice }) => ({
  affirmInvoice,
});
export default connect(mapStateToProps)(AffirmInvoiceList);