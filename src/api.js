import axios from 'axios';

const baseURL = 'https://novel.in.xintiaotime.com/index.php/cms';
const api = {
  noval: '/hjindex/jjkuaibao',
};
const request = axios.create({
  baseURL,
  timeout: 5000,
});
export { request, api };
