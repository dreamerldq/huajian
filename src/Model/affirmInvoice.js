

import pathToRegexp from 'path-to-regexp';
import { apply_invoice, get_invoice as get_invoices, affirm_invoice } from '../Servers/invoice';

export default {
  namespace: 'affirmInvoice',
  state: {
    invoice_type: '',
    invoice_money: '',
    principal: '',
    invoices: [],
    id: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/affirm_invoice/:id').exec(pathname);
        if (match) {
          console.log('AAAA', match[1]);
          dispatch({ type: 'saveId', payload: match[1] });
        }
      });
    },
  },
  reducers: {
    getInvoice(state, { payload }) {
      return {
        ...state, invoices: payload,
      };
    },
    saveId(state, { payload }) {
      return {
        ...state, id: payload,
      };
    },
  },
  effects: {
    * create_affirmIvoice({ payload }, { call, put }) {
      const data = yield call(affirm_invoice, payload);
    },
  },
};
