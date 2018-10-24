import React from 'react';
import { connect } from 'dva';
import { Table,Popconfirm, Button } from 'antd';
import { dataSource, columns } from './data';
import moment from 'moment'
import { timingSafeEqual } from 'crypto';
import Item from 'antd/lib/list/Item';
const tableColumns = (fn, fn2)=>{
  return columns.concat([
    {
      title: '状态',
      dataIndex: 'states',
      key: 'states',
      render(text,record){
        return(
          record.state ?
          <span>已支</span>
          :
          <span>未支</span>
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
    },
    { 
    title: '操作',
    key: 'delete',
    render: (text, record) => (
      <div>
         <span>
        <Popconfirm 
        title="确定删除？" 
        okText="是" 
        cancelText="否"
        onConfirm={() => fn(record.id)}
        >
         <Button type="danger">删除</Button>
        </Popconfirm>
      </span>
        {
          !record.state ?
          <span>
        <Popconfirm 
        title="确定通知？" 
        okText="是" 
        cancelText="否"
        onConfirm={() => fn2(record.id)}
        >
         <Button type="primary">通知</Button>
        </Popconfirm>
      </span>: null
        }
      </div>
     
    ),
  }
  ])
  
}
class ExpendApplyList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteInvoice = this.deleteInvoice.bind(this)
    this.notice = this.notice.bind(this)
  }
  deleteInvoice(id){
    console.log("ID", id)
    this.props.dispatch({type:'expend/delete_expend', payload: id})
  }
  notice(id){
    console.log("AAA",id)
    this.props.dispatch({type:'expend/update_state', payload: id})
  }
  render() {
    
    return (
      <Table
       dataSource={this.props.expend.expendList || []}
       columns={tableColumns(this.deleteInvoice, this.notice)}
       bordered
       rowKey={(record)=>{
         return record.id
       }}/>
    );
  }
}
const mapStateToProps = ({ expend }) => ({
  expend,
});
export default connect(mapStateToProps)(ExpendApplyList);