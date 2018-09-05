import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

class MainIndex extends React.Component {
  constructor(props){
    super(props)
  }
  showNaem = () => {
    this.props.dispatch({ type: 'hello/fetchName' });
  }
  render() {
    return (
      <div>
        <h1>index</h1>
        <h1>{this.props.hello.name}</h1>
        <Button onClick={this.showNaem}>异步请求</Button>
      </div>
    );
  }
}
const mapStateToProps = ({ hello }) => (
  { hello }
);
export default connect(mapStateToProps)(MainIndex);
