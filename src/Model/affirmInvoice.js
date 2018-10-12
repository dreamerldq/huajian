

import pathToRegexp from 'path-to-regexp';
import { affirm_invoice, affirm_invoice_list } from '../Servers/invoice';

export default {
  namespace: 'affirmInvoice',
  state: {
    affirmInvoiceList: [],
    id: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/affirm_invoice/:id').exec(pathname);
        const matchList = pathToRegexp('/affirm_invoice_list').exec(pathname);
        if (match) {
          dispatch({ type: 'saveId', payload: match[1] });
        }
        if (matchList) {
          dispatch({ type: 'getAffirmIvoiceList' });
        }
      });
    },
  },
  reducers: {
    getAffirmInvoiceList(state, { payload }) {
      console.log('wwwww', payload);
      return {
        ...state, affirmInvoiceList: payload,
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
    * getAffirmIvoiceList({ payload }, { call, put }) {
      const data = yield call(affirm_invoice_list);
      console.log('ppppp', data);
      yield put({
        type: 'getAffirmInvoiceList',
        payload: data,
      });
    },
  },
};
