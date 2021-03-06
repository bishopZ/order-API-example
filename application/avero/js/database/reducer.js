
import * as Actions from './actions.js';
import * as Manager from './dataManager.js';

const Reducer = (state = Manager.defaultState, action)=>{

  console.log(action);

  switch (action.type) { 
  case Actions.RECEIVED_API_KEY:
    Manager.updateToken(action.token); break;
  case Actions.RECEIVED_CHECK_LIST:
    Manager.updateCheckList(action.checkList);
    // only updates status when there is a new check
    if (action.tableId) { 
      return Manager.updateEditId(action.tableId);
    }
    break;
  case Actions.RECEIVED_TABLE_LIST:
    Manager.updateTableList(action.tableList); break;
  case Actions.RECEIVED_ITEM_LIST:
    Manager.updateItemList(action.itemList); break;
  case Actions.BASE_DATA_RECIEVED:
    return Manager.initComplete();
  case Actions.UPDATE_VIEW_MODE:
    return Manager.updateViewMode(action.mode);
  case Actions.EDIT_CHECK:
    return Manager.newEditId(action.editId, action.editItems);
  default: break;
  } 

  return state;

};

module.exports = Reducer;
