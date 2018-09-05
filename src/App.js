import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import MainIndex from './Route/MainIndex.jsx';
import Index from './Route/Index.jsx';

const App = ({ history }) => (
  <Router history={history}>
  <Switch>
  <Route path="/" exact component={MainIndex} />
  <Route path="/count" component={Index}></Route>
  </Switch>
</Router>
);
export default App;
