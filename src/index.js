import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { userService } from "./services"
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';


const renderApp = () => ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

userService.initKeycloak(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
