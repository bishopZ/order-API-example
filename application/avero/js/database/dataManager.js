
// default state
export const defaultState = {
};

// private state storage
var currentState = defaultState;
var currentApiToken = null;

// accessor methods
export const updateToken = (token)=>{
  currentApiToken = token;
  return Object.assign(currentState);
};

export const apiToken = ()=>(currentApiToken);
