import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lidanqiu',
    };
  }


  render() {
    return (
            <div className={styles.container}>
              <h1>Hello World</h1>
              <span>{this.state.name}</span>
            </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
