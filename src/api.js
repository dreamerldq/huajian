import axios from 'axios';

const onlineURL = 'https://t3908.xintiaotime.com/index.php/cms';
const baseURL = 'https://novel.in.xintiaotime.com/index.php/cms';
const api = {
  noval: '/hjindex/jjkuaibao',
  recommend: '/jinjiang/jjhome',
  all: '/hjindex/index',
  freeRead: '/hjindex/free_list',
  week: '/hjindex/week_list',
  icon: '/hjindex/banner_icon',
};
const request = axios.create({
  baseURL,
  timeout: 10000,
});

const isIphoneX = () => /iphone/gi.test(window.navigator.userAgent) && (window.screen.height === 812 && window.screen.width === 375);
export { request, api, isIphoneX };
