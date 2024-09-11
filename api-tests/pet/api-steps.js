const {Given, Then} = require("@cucumber/cucumber");
const assert = require('chai').assert;
const AutomationWebClientService = require('../../requestManager/automation-web-client.service');
let response;

Given(/^User performs GET request to "([^"]*)"$/, async function (path) {
  response = await AutomationWebClientService.getRequest(path);
});

Given(/^User performs POST request to "([^"]*)" with$/, async function (path, body) {
    response = await AutomationWebClientService.postRequest(path, JSON.parse(body));
});

Given(/^User performs PUT request to "([^"]*)" with$/, async function (path, body) {
  response = await AutomationWebClientService.putRequest(path, JSON.parse(body));
});

Given(/^User expects the status code is equals to "([^"]*)"$/, async function (expectedStatusCode) {
  await assert.equal(expectedStatusCode, response.statusCode,
    'The status code should be: ' + expectedStatusCode);
});
