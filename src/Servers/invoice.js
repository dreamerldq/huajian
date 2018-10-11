import { request_get, request_post } from '../../utils/api';

async function apply_invoice(config) {
  await request_post('invoice/create', config);
}
async function get_invoice() {
  const { data } = await request_get('invoice/');
  return data;
}
async function affirm_invoice(config) {
  await request_post('invoice/affirmInvoice', config);
}
export { apply_invoice, get_invoice };
