const formData = [
  {
    type: 'select',
    form_name: 'invoice_type',
    required: true,
    name: '发票类型',
    options: [
      '普通发票', '专用发票',
    ],

  },
  {
    type: 'input',
    form_name: 'money',
    required: true,
    name: '金额',
  },
  {
    type: 'input',
    form_name: 'project_principle',
    required: true,
    name: '负责人',

  },
  {
    type: 'input',
    form_name: 'project_name',
    required: true,
    name: '项目名称',

  },
  {
    type: 'input',
    form_name: 'company_name',
    required: true,
    name: '单位名称',

  },
  {
    type: 'input',
    form_name: 'taxpayer_id',
    required: true,
    name: '识别号',
  },
  {
    type: 'input',
    form_name: 'phone_number',
    required: true,
    name: '电话',
    relevant_invoice_type: true,
  },
  {
    type: 'input',
    form_name: 'address',
    required: true,
    name: '地址',
    relevant_invoice_type: true,

  },
  {
    type: 'input',
    form_name: 'bank',
    required: true,
    name: '开户行',
    relevant_invoice_type: true,
  },
  {
    type: 'input',
    form_name: 'bank_user',
    required: false,
    name: '银行账户',
    relevant_invoice_type: true,

  },
  {
    type: 'input',
    form_name: 'remark',
    required: false,
    name: '备注',

  },
];
export default formData;
