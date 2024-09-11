process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

const https = require('https');
const axios = require('axios');

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function createOptions(method, url, data) {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  return {
    method: method,
    url: url,
    httpsAgent: agent,
    data: data
  };
}

async function sendRequest(method, url, data) {
  const options = createOptions(method, url, data);

  let response = await axios.request(options).catch(function (error) {
    return error.response;
  });
  let responseDetails = {};

  responseDetails.statusCode = response.status;
  responseDetails.data = (response && response.data) ? response.data : {};


  return responseDetails
}

/**
 * This function performs a GET request.
 *
 * @param {string} url
 *
 * @return {object}
 **/
exports.get = async (url) => {
  return await sendRequest(HTTP_METHOD.GET, url);
};

/**
 * This function performs a POST request.
 *
 * @param {string} url
 * @param {object} data
 *
 * @return {object}
 **/
exports.post = async (url, data) => {
  return await sendRequest(HTTP_METHOD.POST, url, data);
};

/**
 * This function performs a PUT request.
 *
 * @param {string} url
 * @param {object} data
 *
 * @return {object}
 **/
exports.put = async (url, data) => {
  return await sendRequest(HTTP_METHOD.PUT, url, data);
};