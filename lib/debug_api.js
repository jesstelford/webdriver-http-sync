// Generated by CoffeeScript 2.0.0-beta6
void function () {
  var parseResponseData;
  parseResponseData = require('./parse_response');
  module.exports = function (http) {
    return {
      getConsoleLogs: function () {
        var response;
        response = http.post('/log', { type: 'browser' });
        return parseResponseData(response);
      }
    };
  };
}.call(this);
