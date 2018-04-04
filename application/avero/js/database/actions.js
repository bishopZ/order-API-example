
const communication = require('./communication.js');

// get API Authorization Token
export const RECEIVED_API_KEY = 'RECEIVED_API_KEY';
export const requestApiKey = ()=>(
  communication.requestApiKey(RECEIVED_API_KEY)
);

