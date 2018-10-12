import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Layout } from 'antd';
import ApplyInvoiceList from './Route/ApplyInvoiceList/index';
import ApplyInvoice from './Route/ApplyInvoice/index';
import AppHeader from './Component/Header/index';
import BasicContent from './Route/BasicContent/index.jsx';
import Login from './Route/Login/index.jsx';
import User from './Route/User/index.jsx';
import AffirmInvoice from './Route/AffirmInvoice/index.jsx';
import AffirmInvoiceList from './Route/AffirmInvoiceList';
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
              <Route path="/basic_content" component={BasicContent}></Route>
              <Route path="/create_user" component={User}/>
              <Route path="/affirm_invoice/:id" component={AffirmInvoice}/>
              <Route path="/affirm_invoice_list" component={AffirmInvoiceList}/>
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
