import React from 'react'
import HuaSelect from '../../Component/HuaSelect/index'
export default class HuaComponents extends React.Component{
  constructor(props){
    super(props)
  }
  handleChange = (value) =>{
    console.log("Select Value:", value)
  }
  render(){
    return(
      <div>
          <div>
            <HuaSelect defaultValue="lucy" onHandleChange={this.handleChange}>
              <HuaSelect.Option value="jack">Jack</HuaSelect.Option>
              <HuaSelect.Option value="lucy">Lucy</HuaSelect.Option>
              <HuaSelect.Option value="Yiminghe">yiminghe</HuaSelect.Option>
            </HuaSelect>
          </div>
      </div>
    )
  }
}