chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      /*
      console.log('request');
      console.log(request);
      */
      sendResponse({ message: 'onMessage Listener' });
        /*
        if (request.action == "addSelectorBelowInput") {
            console.log('addSelectorBelowInput');
        }
        */
    });
