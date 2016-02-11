var clipboard = new Clipboard('.item');

var allItems = {
  'lennyfaces': {
    'title' : 'faces',
    'items':  [
     'ʢ◉ᴥ◉ʡ',
     '(◣_◢)'
   ]
 },
 'asciiart': {
   'title' : 'ascii',
   'items':  [
    'ʢ◉ᴥ◉ʡʢ◉ᴥ◉ʡʢ◉ᴥ◉ʡ',
    '(◣_◢)(◣_◢)(◣_◢)(◣_◢)'
  ]
 },
 'specialchars': {
   'title' : 'chars',
   'items':  [
    'ʢ',
    '◣'
  ]
 },

};

// nav
for(var category in allItems) {
  $("nav ul").append('<li class="on" data-category="' + category + '">' + allItems[category].title + '</li>');
  $('section#content').append('<div class="category" id="' + category + '" style="display:none;">' + category + '</div>');
}
$("nav ul li").click(function(el) {
    $('section#content div.category').hide();
    $('section#content div.category#' + $(el.target).attr('data-category')).show();
});

// content
for(var category in allItems) {
  var html='';
  for(var item in allItems[category].items) {
    html+='<button class="' + category + ' item" text="' + allItems[category].items[item] + '">' + allItems[category].items[item] +'</button>';
  }
  $('section#content div.category#' + category).html(html);
}
