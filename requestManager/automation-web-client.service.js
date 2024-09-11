const HttpWebClientService = require('./http-web-client.service');
const UrlProvider = require('./url.provider');

exports.getRequest = async (path) => {
  const url = UrlProvider.buildApiUrl(path);

  return await HttpWebClientService.get(url);
};

exports.postRequest = async (path, body) => {
  const url = UrlProvider.buildApiUrl(path);

  return await HttpWebClientService.post(url, body);
};

exports.putRequest = async (path, body) => {
  const url = UrlProvider.buildApiUrl(path);

  return await HttpWebClientService.put(url, body);
};