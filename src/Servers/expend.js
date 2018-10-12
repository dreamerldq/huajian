import { request_get, request_post } from '../../utils/api';

async function create_expend(config) {
  await request_post('invoice/create_expend', config);
}
async function delete_expend(config) {
  await request_post('invoice/delete_expend', config);
}
async function update_expend_state(config) {
  await request_post('invoice/update_expend_state', config);
}
async function expend_list(config) {
  const { data } = await request_get('invoice/expend_list', config);
  return data;
}
export {
  create_expend, expend_list, update_expend_state, delete_expend,
};
