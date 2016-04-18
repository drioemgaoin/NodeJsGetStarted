function generate(rendered, pdf, callback) {

  var path = require('path')
  var childProcess = require('child_process')
  var phantomjs = require('phantomjs-prebuilt')
  var binPath = phantomjs.path

  var childArgs = [
    path.join(__dirname, 'generatorPdf.js'),
    rendered,
    pdf
  ]

  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
      callback();
  });
}

exports.generate = generate;
