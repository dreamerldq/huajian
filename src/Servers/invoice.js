import { request_get, request_post } from '../../utils/api';

async function apply_invoice(config) {
  await request_post('invoice/create', config);
}
async function delete_invoice(config) {
  await request_post('invoice/delete_invoice', config);
}
async function update_state(config) {
  await request_post('invoice/update_state', config);
}
async function get_invoice() {
  const { data } = await request_get('invoice/');
  return data;
}
async function affirm_invoice(config) {
  console.log('AAAA', config);
  await request_post('invoice/affirm_invoice', config);
}
export {
  apply_invoice, get_invoice, delete_invoice, update_state, affirm_invoice,
};
