//import React from 'react';
const React = require('react');

//import {Route} from 'react-router';
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;

// import App from './App';
const App = require('./App');

//import Login from './Components/Login';
const Login = require('./Components/Login');

export default (
  <Route component={App}>
    <Route path='/' component={Login} />
  </Route>
);
