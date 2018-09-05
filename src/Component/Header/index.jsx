import React from 'react';
import { Menu } from 'antd';
import menus from './menu';
import { routerRedux } from "dva/router"
import {connect} from 'dva'
const { Item } = Menu;
class AppHeader extends React.Component {
  constructor(props){
    super(props)
    this.state={
      current: 'apply_invoice'
    }
  }
  choiceMenu = (e) => {
    this.setState({
      current: e.key
    })
    if(e.key === 'apply_invoice'){
      this.props.dispatch(routerRedux.push('/'));
    }else{
      this.props.dispatch(routerRedux.push('/apply_invoice_list'));
    }
   
  }
  render() {
    return (
      <Menu
        theme="dark"
        selectedKeys={[this.state.current]}
        onSelect={this.choiceMenu}
        >
      {menus.map(menu => (
          <Item key={menu.key}>
            {menu.name}
          </Item>
      ))}
    </Menu>
    );
  }
}
export default connect()(AppHeader);
