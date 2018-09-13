
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
  dataIndex: 'money',
  key: 'money',
},
{
  title: '纳税人识别号',
  dataIndex: 'taxpayer_id',
  key: 'taxpayer_id',
},
{
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '电话',
  dataIndex: 'phone_number',
  key: 'phone_number',
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
  dataIndex: 'project_principle',
  key: 'project_principle',
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
