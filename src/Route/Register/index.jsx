import { Form, Icon, Input, Button } from 'antd';
import {connect} from 'dva'
import React from 'react'
import styles from './index.scss'
import user from '../../Model/user';
import HuaInput from '../../Component/HuaInput'
const FormItem = Form.Item;

class User extends React.Component {

  handleSubmit = (e) => {
    const {user_id} = this.props.user
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(user_id){
          this.props.dispatch({type:'user/edit_user', payload: values})
        }else{
          this.props.dispatch({type:'user/create_user', payload: values})
        }
       
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const {user_info,user_id} = this.props.user
    console.log("AAAA", user_info)
    return (
      <div className={styles.container}>
        <Form className={styles.register}  onSubmit={this.handleSubmit}>
        <h2>用户注册</h2>
        <FormItem>
          {getFieldDecorator('user_name', {
            rules: [{ required: true, message: 'Please input your username!' }],
            
          })(
            <HuaInput type="text" isRequired label='用户名' />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            // initialValue: this.props.user.user_info.username,
            rules: [{ required: true, message: 'Please input your password!' }],
            
          })(
            <HuaInput type='text' isRequired label='密码' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            // initialValue: this.props.user.user_info.username,
            rules: [{ required: true, message: 'Please input your email!' }],
            
          })(
            <HuaInput type='text' isRequired label='e-mail' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('phone_number', {
            // initialValue: this.props.user.user_info.username,
            rules: [{ required: true, message: 'Please input your telphone!' }],
            
          })(
            <HuaInput type='text' isRequired label='电话' />
          )}
        </FormItem>
        
        <FormItem>
          {
            !user_id ?
            <Button
            type="primary"
            htmlType="submit"
            
          >
            创建
          </Button>:

           <Button
           type="primary"
           htmlType="submit"
           
         >
           编辑
         </Button>
          }
        </FormItem>
      </Form>
      </div>
      
    );
  }
}
const mapStateToProps = ({user}) => {
  return{
    user
  }
}
export default connect(mapStateToProps)(Form.create()(User));
