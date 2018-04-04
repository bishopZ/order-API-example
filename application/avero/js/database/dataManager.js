
// default state
export const defaultState = {
  token: ''
};

// private state storage
var currentState = defaultState;

// accessor methods
export const updateToken = (token)=>{
  currentState.token = token;
  return Object.assign(currentState);
};
