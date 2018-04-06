
import * as Actions from './actions.js';
import * as Manager from './dataManager.js';

const dataReducer = (state = Manager.defaultState, action)=>{

  console.log(action);

  switch (action.type) { 
  case Actions.RECEIVED_API_KEY:
    Manager.updateToken(action.token); break;
  case Actions.RECEIVED_CHECK_LIST:
    Manager.updateCheckList(action.checkList); break;
  case Actions.RECEIVED_TABLE_LIST:
    Manager.updateTableList(action.tableList); break;
  case Actions.BASE_DATA_RECIEVED:
    return Manager.initComplete();
  default: break;
  } 

  return state;

};

module.exports = dataReducer;
