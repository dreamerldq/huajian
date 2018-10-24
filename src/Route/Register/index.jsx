import { Form, Icon, Input, Button } from 'antd';
import {connect} from 'dva'
import React from 'react'
import user from '../../Model/user';
const FormItem = Form.Item;

class User extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

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
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
        >
          {getFieldDecorator('user_name', {
            initialValue: this.props.user.user_info.username,
            rules: [{ required: true, message: 'Please input your username!' }],
            
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
            initialValue: this.props.user.user_info.email,
            
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
          )}
        </FormItem>
        <FormItem
          
        >
          {getFieldDecorator('phone_number', {
            rules: [{ required: true, message: 'Please input your phone_number!' }],
            initialValue: this.props.user.user_info.phone_number
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="phone_number" />
          )}
        </FormItem>
        <FormItem
         
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
            initialValue: this.props.user.user_info.password
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
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
    );
  }
}
const mapStateToProps = ({user}) => {
  return{
    user
  }
}
export default connect(mapStateToProps)(Form.create()(User));
