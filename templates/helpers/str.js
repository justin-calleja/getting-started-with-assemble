var fs = require('fs');

module.exports.register = function (Handlebars, options, params) {
  'use strict';

  Handlebars.registerHelper('str', function(filePath) {
    var res = fs.readFileSync(filePath, 'utf8');
    return new Handlebars.SafeString(res);
  });
};
