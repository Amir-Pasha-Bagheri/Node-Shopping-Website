<<<<<<< HEAD
import React from 'react';
=======
import {React} from 'react';
>>>>>>> bdf8587a06105284cee94b5c960e41ebf7017702
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './pages/routes'
import {Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import history from './history'
<<<<<<< HEAD
import ScrollToTop from './ScrollToTop';
=======
>>>>>>> bdf8587a06105284cee94b5c960e41ebf7017702

ReactDOM.render(
  <Router history={history}>
    <Routes />
<<<<<<< HEAD
    <ScrollToTop />
=======
>>>>>>> bdf8587a06105284cee94b5c960e41ebf7017702
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();