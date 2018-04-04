
import communication from './communication.js';

// get API Authorization Token
export const RECEIVED_API_KEY = 'RECEIVED_API_KEY';
export const requestApiKey = ()=>(
  communication.getApiKey(RECEIVED_API_KEY)
);

export const RECEIVED_CHECK_LIST = 'RECEIVED_CHECK_LIST';
export const requestCheckList = ()=>(
  communication.getCheckList(RECEIVED_CHECK_LIST)
);