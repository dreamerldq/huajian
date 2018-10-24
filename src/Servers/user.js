import { request_get, request_post } from '../../utils/api';

async function checked_login(config) {
  await request_post('user/checked_user', config);
}

async function create_user(config) {
  const { data } = await request_post('user/create_user', config);
  return data;
}

async function edit_user(config) {
  const { data } = await request_post('user/edit_user', config);
  return data;
}

async function get_user(config) {
  const { data } = await request_post('user/get_user', config);
  return data[0];
}
export {
  checked_login, create_user, edit_user, get_user,
};
