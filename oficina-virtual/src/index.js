import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Home from './components/home/home'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';

ReactDOM.render(
  <React.StrictMode  className="page-content"  > 
    <App />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
