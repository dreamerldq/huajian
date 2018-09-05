
import { asyncInvoice } from '../Servers/invoice';

export default {
  namespace: 'invoice',
  state: {
    invoice_type: '普通发票',
    invoice_money: '',
    principal: 'llp',
  },
  reducers: {
    getInvoice(state, { payload }) {
      const { invoice_money, invoice_type, principal } = payload;
      return {
        ...state, invoice_money, invoice_type, principal,
      };
    },
  },
  effects: {
    * fetchName({ payload }, { call, put }) {
      const data = yield call(asyncInvoice);
      yield put({
        type: 'getInvoice',
        payload: data,
      });
    },
  },
};
