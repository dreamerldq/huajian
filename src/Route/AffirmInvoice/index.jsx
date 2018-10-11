import React from 'react';
import {Form, Input, Select, Button ,Icon, DatePicker} from 'antd';
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
const FormItem = Form.Item;
import styles from './index.scss'
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class AffirmInvoice extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      invoice_type: this.props.invoice.invoice_type
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({type:'affirmInvoice/create_voice', payload: values})
        console.log('实收金额: ', values);
      }
    });
  }
  choiceInvoice = (value) => {
    this.setState({
      invoice_type: value
    })
  }
  render(){
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const {invoice}  = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem>
            {getFieldDecorator('money_received', {
              rules: [{ required:  true, message: '请输入实收金额' }],
            })(
              <Input 
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="text"
                >
                </Input>
            )}
        </FormItem>
        <FormItem>
            {getFieldDecorator('remark', {
              rules: [{ required:  true, message: '请输入备注' }],
            })(
              <Input 
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="text"
                >
                </Input>
            )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            确认
          </Button>
        </FormItem>
      </Form>
    )
  }
}
const mapStateToProps = ({invoice}) => {
  return {
    invoice: invoice
  }
}
export default Form.create()(connect(mapStateToProps)(AffirmInvoice))
