
// default state
export const defaultState = {};

// private state storage
var currentState = defaultState;
var currentRefrence = {
  token: null
};

// helper methods
const returnNewState = ()=>(Object.freeze(Object.assign(currentState)));

// accessor methods
export const updateToken = (token, state)=>{
  currentRefrence.token = token;
  return state;
};

export const apiToken = ()=>(currentRefrence.token);
