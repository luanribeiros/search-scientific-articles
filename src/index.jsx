import React from 'react';
import { render } from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/styles-global.scss';
import Routes from './routes';

const ROOT = document.querySelector('[data-js="root"]');

render(<Routes />, ROOT);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./routes', render);
}
