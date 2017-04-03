chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: "emojis + lenny faces + unicode",
        id: 'lennyfaceasciiartspecialchars',
        contexts: ["editable"],
        onclick: onClickMenu
    });
});

var onClickMenu = function(e) {
  // console.log('onclick');
  chrome.runtime.sendMessage({
      action: 'addSelectorBelowInput'
  }, function (response) {
    /*
    console.log('response !');
    console.log(response);
    */
  });
};
