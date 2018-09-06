
const columns = [{
  title: '项目名称',
  dataIndex: 'project_name',
  key: 'project_name',
}, {
  title: '单位名称',
  dataIndex: 'company_name',
  key: 'company_name',
}, {
  title: '金额',
  dataIndex: 'invoice_money',
  key: 'invoice_money',
},
{
  title: '纳税人识别号',
  dataIndex: 'person_id',
  key: 'person_id',
},
{
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '电话',
  dataIndex: 'telphone',
  key: 'telphone',
},
{
  title: '开户行',
  dataIndex: 'bank',
  key: 'bank',
},
{
  title: '账号',
  dataIndex: 'bank_user',
  key: 'bank_user',
},
{
  title: '项目负责人',
  dataIndex: 'principal',
  key: 'principal',
},
{
  title: '发票类型',
  dataIndex: 'invoice_type',
  key: 'invoice_type',
}, {
  title: '状态',
  dataIndex: 'states',
  key: 'states',
},
{
  title: '时间',
  dataIndex: 'time',
  key: 'time',
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
  invoice_money: 500,
  person_id: 1,
  telphone: 122,
  bank: '招商',
  bank_user: 'qqqq',
  principal: 'qqqq',
  invoice_type: 'qqqq',
  states: 1,
  time: '2018',
  remark: '无',
};
const dataSource = new Array(5).fill(data);
export { dataSource, columns };
