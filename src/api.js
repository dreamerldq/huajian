import axios from 'axios';

const onlineURL = 'https://t3908.xintiaotime.com/index.php/cms';
const baseURL = 'https://novel.in.xintiaotime.com/index.php/cms';
const api = {
  noval: '/hjindex/jjkuaibao',
  recommend: '/jinjiang/jjhome',
  all: '/hjindex/index',
  freeRead: '/hjindex/free_list',
  week: '/hjindex/week_list',
};
const request = axios.create({
  baseURL,
  timeout: 10000,
});
export { request, api };
