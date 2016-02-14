chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: "lenny face + ascii art + special chars",
        id: 'lennyfaceasciiartspecialchars',
        contexts: ["editable"],
        onclick: onClickMenu
    });
});

var onClickMenu = function(e) {
  console.log('onclick');
  chrome.runtime.sendMessage({
      action: 'addSelectorBelowInput'
  }, function (response) {
    console.log('response !');
    console.log(response);
  });
}
