var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1440, height: 900 };
page.paperSize = {
   format: "A4",
   orientation: "landscape",
   margin: { left: "1cm", right: "1cm", top: "1cm", bottom: "1cm" }
};

var system = require('system');
page.content = system.args[1];
page.render(system.args[2]);
phantom.exit();
