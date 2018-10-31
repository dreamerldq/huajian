import React from 'react'
import HuaSelect from '../../Component/HuaSelect'
import HuaTable from '../../Component/HuaTable'
import HuaPagination from '../../Component/HuaPagination'
import HuaTabs from '../../Component/HuaTabs'
import {Button} from 'antd'
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  phone: '175165160549'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    render: (text, record, index) => {
      
      return(
        <span style={{color:'red'}}>
        <Button style={{width:'100px'}} type="primary">{text}</Button>
      </span>
      )
    },
    width: 100
  },
  {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text, record, index) => {
    return(
      <span style={{color:'red'}}>
      {text}
    </span>
    )
  },
  width: 100
},
 {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 100
},
 {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: 150
}];
export default class HuaComponents extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: 1,
      pageSize: 10,
      currentTabs:"1"
    }
  }
  handleChange = (value) =>{
    console.log("Select Value:", value)
  }
  handleCurrentPage = (page) =>{
    console.log("当前页数是",page)
    this.setState({
      current: page
    })
  }
  
  handleSizeChange = (pageSize) => {
    console.log("pageSize", pageSize )
    this.setState({
      pageSize: pageSize
    })
  }
  handleTabs = (tab) => {
    console.log("AAAA", tab)
    this.setState({
      currentTabs: tab
    })
  }

  render(){
    const {current, pageSize} = this.state
    return(
      <div>
          
            <HuaSelect defaultValue="lucy" onHandleChange={this.handleChange}>
              <HuaSelect.Option value="jack">Jack</HuaSelect.Option>
              <HuaSelect.Option value="lucy">Lucy</HuaSelect.Option>
              <HuaSelect.Option value="Yiminghe">yiminghe</HuaSelect.Option>
            </HuaSelect>
         
          
          <HuaTable
             dataSource={dataSource}
             columns={columns}
             bordered
             local={{
              emptyText: '暂无数据'
             }}
            />
            <HuaPagination
             onChange={this.handleCurrentPage}
             onShowSizeChange={this.handleSizeChange}
             total={40}
             pageSize={pageSize}
             current={current}
           
            ></HuaPagination>
            <HuaTabs activeKey={this.state.currentTabs} onChange={this.handleTabs}>
               <HuaTabs.Item tab="一" key="1">
                  <div>第一页</div>
               </HuaTabs.Item >
               <HuaTabs.Item tab="二" key="2">
                  <div>第二页</div>
               </HuaTabs.Item>
               <HuaTabs.Item tab="三" key="3">
                  <div>第三页</div>
               </HuaTabs.Item>
            </HuaTabs>
          
      </div>
    )
  }
}