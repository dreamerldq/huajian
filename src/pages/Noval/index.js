import React from 'react';
import ReactDOM from 'react-dom';

class Noval extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <h1>这是小说快报页面</h1>
    );
  }
}
ReactDOM.render(<Noval/>, document.getElementById('app'));//eslint-disable-line
