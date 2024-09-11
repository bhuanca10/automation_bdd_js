const http = require('k6/http');
const {check} = require('k6');
const UrlProvider = require('../requestManager/url.provider.js');
export const options = {
  vus: 100,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(99)<1000'], // 99% of requests should be below 1s
  },
};
export default function () {
  const url = UrlProvider.buildApiUrl('pet/findByStatus?status=available');
  const res = http.get(url);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}