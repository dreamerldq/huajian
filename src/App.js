import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'dva/router';
import { Layout } from 'antd';
import ApplyInvoiceList from './Route/ApplyInvoiceList/index';
import ApplyInvoice from './Route/ApplyInvoice/index';
import AppHeader from './Component/Header/index';
import Login from './Route/Login/index.jsx';
import Register from './Route/Register/index.jsx';
import AffirmInvoice from './Route/AffirmInvoice/index.jsx';
import AffirmInvoiceList from './Route/AffirmInvoiceList';
import ExpendApply from './Route/ExpendApply';
import ExpendApplyList from './Route/ExpendApplyList';
import HuaComponents from './Route/HuaComponents';
import FinancialStatistic from './Route/FinancialStatistic';
import styles from './index.scss';

class ProtectRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const PublicHomePage = this.props.component;
    const { path } = this.props;
    const loggedIn = window.localStorage.getItem('login');
    return (
      <Route path={path} render={() => (
        loggedIn ? (
          <PublicHomePage/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>
    );
  }
}
const {
  Header, Footer, Sider, Content,
} = Layout;

const App = ({ history }) => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
      <Redirect exact from='/' to='/apply_invoice_list'/>
      <Route path="/login" component={Login} />

      {/* <Route path="/create_user" component={Register} /> */}
      <Route path="/components" component={HuaComponents}></Route>
      <ProtectRoute path="/create_user" component={Register}></ProtectRoute>
      <ProtectRoute path="/apply_invoice" exact component={ApplyInvoice} />
      <ProtectRoute path="/affirm_invoice/:id" component={AffirmInvoice} />
      <ProtectRoute path="/expend_apply" component={ExpendApply} />
        <Layout className={styles.container}>
          <Sider className={styles.slider}>
            <AppHeader />
          </Sider>
          <Layout>
            {/* <Header className={styles.header}/> */}
            <Content className={styles.content}>

              <Route path="/apply_invoice_list" component={ApplyInvoiceList} />
              <Route
                path="/affirm_invoice_list"
                component={AffirmInvoiceList}
              />
              <Route path="/expend_apply_list" component={ExpendApplyList} />
              <Route
                path="/financial_statistic"
                component={FinancialStatistic}
              />
            </Content>
            <Footer className={styles.footer}>
              Hua Jian Project ©2018 Created DreamerLDQ
            </Footer>
          </Layout>
        </Layout>
      </Switch>
    </Router>
  </React.Fragment>
);
export default App;
