import React from 'react';

const columns = [
  {
    title: '序号',
    key: 'id',
    render(text, record, index) {
      return (
        <span>{index}</span>
      );
    },
  },
  {
    title: '项目名称',
    dataIndex: 'project_name',
    key: 'project_name',
  }, {
    title: '单位名称',
    dataIndex: 'company_name',
    key: 'company_name',
  }, {
    title: '已开发票',
    dataIndex: 'money',
    key: 'money',
  },
  {
    title: '实收金额',
    dataIndex: 'money_received',
    key: 'money_received',
  },
  {
    title: '项目负责人',
    dataIndex: 'project_principle',
    key: 'project_principle',
  },
  {
    title: '发票类型',
    dataIndex: 'invoice_type',
    key: 'invoice_type',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  }];
const data = {
  id: 1,
  project_name: 'llp',
  company_name: 32,
  address: '西湖区湖底公园1号',
  money: 500,
  taxpayer_id: 1,
  phone_number: 122,
  bank: '招商',
  bank_user: 'qqqq',
  project_principle: 'qqqq',
  invoice_type: 'qqqq',
  states: 1,
  time: '2018',
  remark: '无',
};
const dataSource = new Array(5).fill(data);
export { dataSource, columns };
