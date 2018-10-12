import { request_get, request_post } from '../../utils/api';

async function expend_apply(config) {
  await request_post('invoice/expend_apply', config);
}
async function expend_apply_list(config) {
  const { data } = await request_get('invoice/expend_apply_list', config);
  return data;
}
export {
  expend_apply, expend_apply_list,
};
