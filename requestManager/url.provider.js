const API_URL = 'https://petstore3.swagger.io/api/v3';

/**
 * This function builds the API URL
 *
 * @return {string}
 **/
exports.buildApiUrl = (path) => {
  return `${API_URL}/${path}`;
};