import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Changing to register() will allow your app to work offline and load faster.
serviceWorkerRegistration.unregister();

// You can measure performance in your app by passing a function that logs results (for example: reportWebVitals(console.log))
reportWebVitals();