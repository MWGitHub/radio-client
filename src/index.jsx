import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

module.exports = function start(rootElement) {
  ReactDOM.render(<Root />, rootElement);
};