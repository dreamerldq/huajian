const formData = [
  {
    type: 'input',
    form_name: 'project_name',
    required: true,
    name: '项目名称',
    message: '请输入项目名称',

  },
  {
    type: 'input',
    form_name: 'expend_content',
    required: true,
    name: '支出内容',
    message: '请输入支出内容',

  },
  {
    type: 'input',
    form_name: 'expend_money',
    required: true,
    name: '金额',
    message: '请输入金额',
  },
  {
    type: 'input',
    form_name: 'project_principle',
    required: true,
    name: '负责人',
    message: '请输入负责人名称',
  },
  {
    type: 'input',
    form_name: 'remark',
    required: false,
    name: '备注',
    message: '请输入备注',
  },
];
export default formData;
