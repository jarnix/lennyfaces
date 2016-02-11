var allItems = {
    'lennyfaces': {
        'title': 'faces',
        'items': [
            "( ͡° ͜ʖ ͡°)",
            "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
            "( ͡~ ͜ʖ ͡°)",
            "( ͡o ͜ʖ ͡o)",
            "° ͜ʖ ͡-",
            "( ͡͡° ͜ʖ ͡°)﻿",
            "( ͡°° ʖ ͡°°)",
            "(ง ͠° ͟ل͜ ͡°)ง",
            "( ͡° ͜ʖ ͡°)",
            "(ʖ ͜° ͜ʖ)",
            "[ ͡° ͜ʖ ͡°]",
            "( ͡o ͜ʖ ͡o)",
            "{ ͡• ͜ʖ ͡•}",
            "( ͡° ͜V ͡°)",
            "( ͡^ ͜ʖ ͡^)",
            "( ‾ʖ̫‾)",
            "( ͡°╭͜ʖ╮͡° )",
            "ᕦ( ͡°╭͜ʖ╮͡° )ᕤ",
            'ʢ◉ᴥ◉ʡ',
            '(◣_◢)'
        ]
    },
    'asciiart': {
        'title': 'ascii',
        'items': [
            'ʢ◉ᴥ◉ʡʢ◉ᴥ◉ʡʢ◉ᴥ◉ʡ',
            '(◣_◢)(◣_◢)(◣_◢)(◣_◢)'
        ]
    },
    'specialchars': {
        'title': 'chars',
        'items': [
            'ʢ',
            '◣'
        ]
    },

};

var init = function () {
    // nav
    var i = 0;
    for (var category in allItems) {
        var html = '<li';
        if (i == 0) {
            html += ' class="on" ';
        }
        i++;
        html += ' data-category="' + category + '">' + allItems[category].title + '</li>';
        $("nav ul").append(html);
        $('section#content').append('<div class="category" id="' + category + '" style="display:none;">' + category + '</div>');
    }

    $("nav ul li").click(function (el) {
        $('section#content div.category').hide();
        $('nav ul li').removeClass('on');
        $(el).addClass('on');
        $('section#content div.category#' + $(el.target).attr('data-category')).show();
    })
    for (var category in allItems) {
        $('section#content div.category#' + category).show();
        break;
    }

    // content
    for (var category in allItems) {
        var html = '';
        for (var item in allItems[category].items) {
            html += '<button class="' + category + ' item" data-clipboard-text="' + allItems[category].items[item] + '">' + allItems[category].items[item] + '</button>';
        }
        $('section#content div.category#' + category).html(html);
    }

    chrome.runtime.onInstalled.addListener(function () {
        chrome.contextMenus.create({
            title: "lenny face + ascii art + special chars",
            id: 'lennyfaceasciiartspecialchars',
            contexts: ["editable"],
            onclick: addSelectorBelowInput
        })
    });

}

var addSelectorBelowInput = function () {
    chrome.runtime.sendMessage({
        action: 'addSelectorBelowInput'
    }, function (response) {

    });
}

// addSelectorBelowInput = ext.addSelectorBelowInput;

init();
var clipboard = new Clipboard('.item');
clipboard.on('success', function (e) {
    chrome.runtime.sendMessage({
        action: 'copy',
        text: e.text
    }, function (response) {
        console.log('response');
        console.log(response);
        // console.log(response.farewell);
    });
    e.clearSelection();
});
