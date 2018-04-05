
import * as Actions from './actions.js';
import * as Manager from './dataManager.js';

const dataReducer = (state = Manager.defaultState, action)=>{

  switch (action.type) { 
  case Actions.RECEIVED_API_KEY:
    return Manager.updateToken(action.token);
  case Actions.RECEIVED_CHECK_LIST:
    return Manager.updateCheckList(action.checkList);
  case Actions.RECEIVED_TABLE_LIST:
    return Manager.updateTableList(action.tableList);
  default: return state;
  } 

};

module.exports = dataReducer;
