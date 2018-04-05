
import communication from './communication.js';

// get API Authorization Token
export const RECEIVED_API_KEY = 'RECEIVED_API_KEY';
export const requestApiKey = ()=>((dispatch)=>(
  communication.getApiKey(RECEIVED_API_KEY, dispatch)
));

export const RECEIVED_CHECK_LIST = 'RECEIVED_CHECK_LIST';
export const requestCheckList = ()=>((dispatch)=>(
  communication.getCheckList(RECEIVED_CHECK_LIST, dispatch)
));
