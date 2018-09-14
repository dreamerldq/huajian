import { request_get, request_post } from '../../utils/api';

async function checked_login(config) {
  await request_post('invoice/checked_user', config);
}

async function create_user(config) {
  await request_post('invoice/create_user', config);
}
export { checked_login, create_user };
