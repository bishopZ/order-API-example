
import * as Actions from './actions.js';
import * as Manager from './dataManager.js';

const dataReducer = (state = Manager.defaultState, action)=>{

  switch (action.type) { 
  case Actions.RECEIVED_API_KEY:
    return Manager.updateToken(action.token, state);
  default: return state;
  } 

};

module.exports = dataReducer;
