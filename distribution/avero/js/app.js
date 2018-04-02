(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// import React from 'react';
// import { render } from 'react-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

// import { Provider, connect } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { history, store } from './database/store.js';

// import * as Actions from './database/actions.js';

// import NavBar from './components/navbar.js';
// import HomePage from './pages/home.js';
// import AboutPage from './pages/about.js';
// import BlogPage from './pages/blog.js';

// // simple way to create pass-along redux containers
// const defaultMapStateToProps = (a)=>(a); // give them everything
// const defaultMapDispatchToProps = Actions; // give them everything
// const container = (Page) => {
//   return connect(
//     defaultMapStateToProps, // which properties are sent to the page
//     defaultMapDispatchToProps // which functions are sent to the page
//   )(Page);
// };

// // render the router
// render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <Router>
//         <div>
//           <NavBar />
//           <Route exact path="/" component={container(HomePage)}/>
//           <Route exact path="/about" component={container(AboutPage)}/>
//           <Route exact path="/blog" component={container(BlogPage)}/>
//         </div>
//       </Router>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('react-root')
// );

// // it has begun
// console.log('%c App Started', 'color:green');
"use strict";

},{}]},{},[1]);
