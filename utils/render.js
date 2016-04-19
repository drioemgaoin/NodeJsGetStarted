var Handlebars = require('handlebars')
var fs = require('fs')

module.exports = function(tplPath, data, callback) {

  Handlebars.registerHelper('fullName', function(person) {
    return person.firstName + " " + person.lastName;
  });

  fs.readFile(tplPath, function(err, tpl) {
    if (err)
    {
      callback(err);
    }
    else
    {
      var template = Handlebars.compile(tpl.toString());
      var rendered = template(data);
    }

    callback(rendered);
  })
};
