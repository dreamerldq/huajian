
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import {
  checked_login, create_user, edit_user, get_user,
} from '../Servers/user';

export default {
  namespace: 'user',
  state: {
    user_info: {},
    user_id: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/create_user/:id').exec(pathname);
        if (match) {
          dispatch({ type: 'get_user', payload: match[1] });
          dispatch({ type: 'save_id', payload: match[1] });
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
    save_user(state, { payload }) {
      return {
        ...state, user_info: payload,
      };
    },
    save_id(state, { payload }) {
      return {
        ...state, user_id: payload,
      };
    },
  },
  effects: {
    * checked_login({ payload }, { call, put }) {
      const { data, status } = yield call(checked_login, payload);
      console.log('AAAA', data, status);
      if (status === 'success') {
        window.localStorage.setItem('login', 'true');
        yield put(routerRedux.push('/apply_invoice_list'));
      }
    },
    * create_user({ payload }, { call, put }) {
      console.log('上传的值', payload);
      const { status, data } = yield call(create_user, payload);
      if (status === 'success') { yield put(routerRedux.push('/login')); }
    },

    * edit_user({ payload }, { call, put }) {
      console.log('上传的值', payload);
      const { status, data } = yield call(edit_user, payload);
      if (status === 'success') { yield put(routerRedux.push('/login')); }
    },

    * get_user({ payload }, { call, put }) {
      const data = yield call(get_user, { id: payload });

      yield put({
        type: 'save_user',
        payload: data,
      });
    },
  },
};
