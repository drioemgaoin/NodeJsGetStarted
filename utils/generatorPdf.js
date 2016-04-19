var webPage = require('webpage');
var page = webPage.create();

page.settings.localToRemoteUrlAccessEnabled = true;
page.viewportSize = { width: 1440, height: 900 };
page.paperSize = {
   format: "A4",
   orientation: "portrait",
   margin: { left: "1cm", right: "1cm", top: "1cm", bottom: "1cm" }
};

page.onLoadFinished = function() {
    page.render(system.args[2]);
    phantom.exit();
};

var system = require('system');
page.content = system.args[1];
