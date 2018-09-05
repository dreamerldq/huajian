import React from 'react';
import dva from 'dva';
import App from './App';
import models from './models';
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
