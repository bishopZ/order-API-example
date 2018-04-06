
// default state
export const defaultState = {
  documentPhase: 0,
  viewMode: 'open',
  editId: '',
  checkList: [],
  tableList: [],
  itemList: [],
  editItems: []
};

// private state storage
var currentState = defaultState;
var currentRefrence = {
  token: null
};

// helper methods
const returnNewState = ()=>(Object.freeze(Object.assign({}, currentState)));

const linkChecksToTables = ()=>{
  currentState.checkList = currentState.checkList.map((check)=>{
    check.table = currentState.tableList.find((table)=>(table.id === check.tableId));
    return check;
  });
};

// interface
export const apiToken = ()=>(currentRefrence.token);

export const updateToken = (token)=>{
  currentRefrence.token = token;
};

export const updateCheckList = (checkList)=>{
  currentState.checkList = checkList;
  linkChecksToTables();
};

export const updateTableList = (tableList)=>{
  currentState.tableList = tableList;
  linkChecksToTables();
};

export const updateItemList = (itemList)=>{
  currentState.itemList = itemList;
  linkChecksToTables();
};

export const initComplete = ()=>{
  currentState.documentPhase = 1;
  return returnNewState();
};

export const updateViewMode = (newMode)=>{
  currentState.viewMode = newMode;
  return returnNewState();
};

export const updateEditId = (tableId)=>{
  const editObject = currentState.checkList.find((check)=>(check.tableId === tableId));
  currentState.editId = editObject.id;
  return returnNewState();
};

export const newEditId = (editId, editItems)=>{
  currentState.editId = editId;
  currentState.editItems = editItems;
  return returnNewState();
};
