

// import pathToRegexp from 'path-to-regexp';
import { apply_invoice, get_invoice as get_invoices } from '../Servers/invoice';

export default {
  namespace: 'affirmInvoice',
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
    * create_voice({ payload }, { call, put }) {
      const data = yield call(apply_invoice, payload);
    },
  },
};
