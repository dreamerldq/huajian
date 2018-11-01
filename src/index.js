import React from 'react';
import dva from 'dva';
import ReactDOM from 'react-dom';
import App from './App';
import models from './models';
import notification from './Component/HuaNotification';
// 1. Initialize
const app = dva();
// 2. Model
models.forEach((model) => {
  app.model(model);
});

// 4. Router
app.router(App);

// 5. Start
app.start('#app');


// ReactDOM.render(notification.NotifcationContent, document.getElementById('notification'));
