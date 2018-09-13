import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Layout } from 'antd';
import ApplyInvoiceList from './Route/ApplyInvoiceList/index';
import ApplyInvoice from './Route/ApplyInvoice/index';
import AppHeader from './Component/Header/index';
import BasicContent from './Route/BasicContent/index.jsx';
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
              <Route path="/apply_invoice_list" component={ApplyInvoiceList} />
              <Route path="/basic_content" component={BasicContent}></Route>
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
