var Handlebars = require('handlebars')
var fs = require('fs')

module.exports = function(tplPath, data, callback) {

  Handlebars.registerHelper('each', function(context, options) {
    var ret = "";
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + options.fn(context[i]);
    }
    return ret;
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
