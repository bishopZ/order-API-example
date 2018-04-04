
import * as Actions from './actions.js';

const defaultState = {};

const dataReducer = (state = defaultState, action) => {

  switch (action.type) { 
  default: return state;
  } 

};

module.exports = dataReducer;
