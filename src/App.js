import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from './Route/Index/index';
import ApplyInvoice from './Route/ApplyInvoice/index';

const App = ({ history }) => (
  <Router history={history}>
  <Switch>
  <Route path="/" exact component={Index} />
  <Route path="/applyinvoice" component={ApplyInvoice}></Route>
  </Switch>
</Router>
);
export default App;
