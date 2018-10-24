import React from 'react';
import { Router, Route, Switch } from 'dva/router';
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
import FinancialStatistic from './Route/FinancialStatistic';
import styles from './index.scss';

const {
  Header, Footer, Sider, Content,
} = Layout;

const App = ({ history }) => (
      <React.Fragment>
      <Layout className={styles.container}>
        <Sider className={styles.slider}>
          <AppHeader></AppHeader>
        </Sider>
        <Layout>
          {/* <Header className={styles.header}/> */}
          <Content className={styles.content}>
            <Router history={history}>
              <Switch>
              <Route path="/" exact component={ApplyInvoice}></Route>
              <Route path="/login" component={Login}/>
              <Route path="/apply_invoice_list" component={ApplyInvoiceList} />
              <Route path="/create_user" component={Register}/>
              <Route path="/affirm_invoice/:id" component={AffirmInvoice}/>
              <Route path="/affirm_invoice_list" component={AffirmInvoiceList}/>
              <Route path="/expend_apply" component={ExpendApply}/>
              <Route path="/expend_apply_list" component={ExpendApplyList}/>
              <Route path="/financial_statistic" component={FinancialStatistic}/>
              </Switch>
             </Router>
          </Content>
          <Footer className={styles.footer}>
            Hua Jian Project ©2018 Created DreamerLDQ
          </Footer>
        </Layout>
        </Layout>
      </React.Fragment>
);
export default App;
