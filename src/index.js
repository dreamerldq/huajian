import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import indexState from './Model/index';
import MainIndex from './Route/MainIndex.jsx';

const store = {
  indexState,
};

class App extends React.Component {
  render() {
    return (
            <Provider {...store}>
            <Router>
                <Route path="/" component={MainIndex}/>
            </Router>
        </Provider>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
