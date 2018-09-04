import React from 'react';
import { observer, inject } from 'mobx-react';
import indexState from '../Model';

@inject("indexState")
@observer
export default class MainIndex extends React.Component {
  addTimer = () => {
    this.props.indexState.addTimer()
  }
  render() {
    return (
      <div>
          <button onClick={this.addTimer}>
           +
        </button>
        <button onClick={this.props.indexState.subTimer.bind(indexState)}>-</button>
        <button onClick={this.props.indexState.promiseAddTimer.bind(indexState)}>async +</button>
        <h1>{this.props.indexState.timer}</h1>
        <h2>{this.props.indexState.computedTimer}</h2>
      </div>
  );
}
}
