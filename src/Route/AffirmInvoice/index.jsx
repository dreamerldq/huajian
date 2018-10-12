import React from 'react';
import {Form, Input, Select, Button ,Icon, DatePicker} from 'antd';
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
const FormItem = Form.Item;
import styles from './index.scss'
import { ENGINE_METHOD_DIGESTS } from 'constants';
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class AffirmInvoice extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {id} = this.props.affirmInvoice
        this.props.dispatch({type:'affirmInvoice/create_affirmIvoice', payload: {...values,id}})
        console.log('实收金额: ', {...values,id});
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
    const {affirmInvoice}  = this.props

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem>
            {getFieldDecorator('money_received', {
              rules: [{ required:  true, message: '请输入实收金额' }],
            })(
              <Input 
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="text"
                  placeholder="实收金额"
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
                  placeholder="备注"
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
const mapStateToProps = ({affirmInvoice}) => {
  return {
    affirmInvoice: affirmInvoice
  }
}
export default Form.create()(connect(mapStateToProps)(AffirmInvoice))
