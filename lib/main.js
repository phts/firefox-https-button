var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "https-button",
    label: "Switch to https",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    var url = tabs.activeTab.url;
    if (url.indexOf("http://") != 0) {
        return;
    }
    tabs.activeTab.url = url.replace("http://", "https://");
}
