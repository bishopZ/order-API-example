
import * as Actions from './actions.js';
import * as Manager from './dataManager.js';

const dataReducer = (state = Manager.defaultState, action) => {

  switch (action.type) { 
  case Actions.RECEIVED_API_KEY:
    Manager.updateToken(action.token);
    return state;
  default: return state;
  } 

};

module.exports = dataReducer;
