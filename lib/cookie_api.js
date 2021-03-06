// Generated by CoffeeScript 2.0.0-beta6
void function () {
  var parseResponseData;
  parseResponseData = require('./parse_response');
  module.exports = function (http) {
    return {
      setCookie: function (cookie) {
        if (null != cookie.path)
          cookie.path;
        else
          cookie.path = '/';
        http.post('/cookie', { cookie: cookie });
      },
      getCookies: function () {
        var response;
        response = http.get('/cookie');
        return parseResponseData(response);
      },
      clearCookies: function () {
        http['delete']('/cookie');
      }
    };
  };
}.call(this);
