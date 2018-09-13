
// import pathToRegexp from 'path-to-regexp';
import { apply_invoice, get_invoice as get_invoices } from '../Servers/invoice';

export default {
  namespace: 'invoice',
  state: {
    invoice_type: '',
    invoice_money: '',
    principal: '',
    invoices: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // /posts
        if (pathname === '/apply_invoice_list') {
          dispatch({ type: 'get_invoice' });
        }
      //   // /posts/:key
      //   const match = pathToRegexp('/posts/:key').exec(pathname);
      //   if (match) {
      //     dispatch({ type: 'fetchPost', payload: match[1] });
      //   }
      });
    },
  },
  reducers: {
    getInvoice(state, { payload }) {
      return {
        ...state, invoices: payload,
      };
    },
  },
  effects: {
    * get_invoice({ payload }, { call, put }) {
      const data = yield call(get_invoices);
      console.log('AAAA', data);
      yield put({
        type: 'getInvoice',
        payload: data,
      });
    },
    * create_voice({ payload }, { call, put }) {
      const data = yield call(apply_invoice, payload);
    },
  },
};
