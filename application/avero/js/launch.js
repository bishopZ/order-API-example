
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history, store } from './database/store.js';
import * as Actions from './database/actions.js';

import NavBar from './components/navbar.js';
import HomePage from './pages/home.js';

// simple way to create pass-along redux containers
const mapStateToProps = (a)=>(a); // give them everything
const mapDispatchToProps = Actions; // give them everything
const container = (Page) => {
  return connect(
    mapStateToProps, // which properties are sent to the page
    mapDispatchToProps // which functions are sent to the page
  )(Page);
};

// render the provided connection to the rendered router route
// with a navbar
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div className="one-router-child">
          <NavBar />
          <Route exact path="/" component={container(HomePage)}/>
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);

// it has begun
console.log('%c App Started', 'color:green');
