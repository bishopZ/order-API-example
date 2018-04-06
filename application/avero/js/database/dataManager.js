
// default state
export const defaultState = {
  documentPhase: 0,
  viewMode: 'open',
  editId: 0,
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

// interface
export const apiToken = ()=>(currentRefrence.token);

export const updateToken = (token)=>{
  currentRefrence.token = token;
};

export const updateCheckList = (checkList)=>{
  currentState.checkList = checkList;
};

export const updateTableList = (tableList)=>{
  currentState.tableList = tableList;
};

export const initComplete = ()=>{
  currentState.documentPhase = 1;
  return returnNewState();
};
