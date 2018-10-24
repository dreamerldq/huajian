import React from 'react';
import {Form, Input, Select, Button ,Icon, DatePicker} from 'antd';
import { connect } from 'dva'
import formData from './data'
const FormItem = Form.Item;
const {Option} = Select
import styles from './index.scss'
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class ExpendApply extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    console.log("SSSSSS", e)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({type:'expend/create_expend', payload: values})
        console.log('Received values of form: ', values);
      }
    });
  }
  render(){
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const {expend}  = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {formData.map((item, index) => {
              return(
                <FormItem key={index}>
                {getFieldDecorator(item.form_name, {
                  rules: [{ required: item.required, message: item.message }],
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
            )}
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            创建表单
          </Button>
        </FormItem>
      </Form>
    )
  }
}
const mapStateToProps = ({expend}) => {
  return {
    expend: expend
  }
}
export default Form.create()(connect(mapStateToProps)(ExpendApply))
