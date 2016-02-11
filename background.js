chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
          if (request.action == "copy") {
              var field = document.activeElement;
              if (field.selectionStart || field.selectionStart == '0') {
                  var startPos = field.selectionStart;
                  var endPos = field.selectionEnd;
                  field.value = field.value.substring(0, startPos) + request.text + field.value.substring(endPos, field.value.length);
              } else {
                  field.value += request.text;
              }
          }
          sendResponse({farewell : 'salut'});
    });
