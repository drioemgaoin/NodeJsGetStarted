var PDFDocument = require('pdfkit')
var blobStream  = require('blob-stream')
var $ = require('jquery');

var doc = new PDFDocument();
var stream = doc.pipe(blobStream());

doc.fontSize(25)
   .text('Here is some vector graphics...', 100, 80);
doc.end()

stream.on('finish', function() {
  $('#iframe').ready(function () {
      $('#iframe')[0].src = stream.toBlobURL('application/pdf');
  });
})
