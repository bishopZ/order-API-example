
// default state
export const defaultState = {
  documentPhase: 0,
  viewMode: 'open',
  editId: '',
  checkList: [],
  tableList: []
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
    const table = currentState.tableList.filter((table)=>(table.id === check.tableId));
    check.table = table[0];
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

export const initComplete = ()=>{
  currentState.documentPhase = 1;
  return returnNewState();
};

export const updateViewMode = (newMode)=>{
  currentState.viewMode = newMode;
  return returnNewState();
};
