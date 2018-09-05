import React from 'react';
import {Form, Input, Select, Button ,Icon, DatePicker} from 'antd';
import { connect } from 'dva'
import formData from './data'
const FormItem = Form.Item;
const {Option} = Select
import styles from './index.scss'

class ApplyInvoice extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      invoice_type: this.props.invoice.invoice_type
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  choiceInvoice = (value) => {
    this.setState({
      invoice_type: value
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const {invoice}  = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {formData.map((item, index) => {
          switch(item.type){
            case 'input':
            if(item.relevant_invoice_type){
              return(
                <FormItem key={index}>
                {getFieldDecorator(item.form_name, {
                  rules: [{ required: this.state.invoice_type === '普通发票' ? false : true, message: item.message || 'Please input your Password!' }],
                  initialValue: invoice[item.form_name]
                })(
                  <Input 
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                      type={item.type || "text" } 
                      placeholder={item.name}
                      
                   >
                   </Input>
                )}
              </FormItem>
              )
            }else{
              return(
                <FormItem key={index}>
                {getFieldDecorator(item.form_name, {
                  rules: [{ required: item.required, message: item.message || 'Please input your Password!' }],
                  initialValue: invoice[item.form_name]
                })(
                  <Input 
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                      type={item.type || "text" } 
                      placeholder={item.name}
                   >
                   </Input>
                )}
              </FormItem>
              )
            }
            case 'data':
             return(
               <DatePicker></DatePicker>
             )
            case 'select':
            return(
              <FormItem key={index}>
              {getFieldDecorator(item.form_name, {
                rules: [{ required: item.required, message: item.message && 'Please input your Password!' }],
                initialValue: invoice[item.form_name]
              })(
                <Select 
                  prefix={<Icon type="lock"
                  style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type={item.type || "text" }
                  onSelect={this.choiceInvoice}
                  placeholder={item.name}>
                  {item.options.map((option, index) =>{
                      return(
                        <Option key={index} value={option}>{option}</Option>
                      )
                    })}
                </Select>
              )}
            </FormItem>
            )
            default:
             break;
          }
        })}
        <Button onSubmit={this.handleSubmit}>
            创建表单
        </Button>
      </Form>
    )
  }
}
const mapStateToProps = ({invoice}) => {
  return {
    invoice: invoice
  }
}
export default Form.create()(connect(mapStateToProps)(ApplyInvoice))
