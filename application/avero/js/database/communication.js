
const request = require('superagent');

const communication = {};

communication.requestApiKey = (action)=>{
  return (dispatch)=>{
    request
      .get('/api/token')
      .end((error, response) => {
        dispatch({
          type: action,
          token: response.text
        });
      });
  };
};

module.exports = communication;
