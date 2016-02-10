var clipboard = new Clipboard('.lenny');

var lennyfaces = {
  'lenny': {
    'title' : 'lenny',
    'faces':  [
     'ʢ◉ᴥ◉ʡ',
     '(◣_◢)'
   ]
 }
  };

var html = '';

for(var category in lennyfaces) {
  html+='<div class="category">' + lennyfaces[category].title + '</div><div class="faces">';
  for(var face in lennyfaces[category].faces) {
    html+='<div class="lenny" text="' + lennyfaces[category].faces[face] + '">' + lennyfaces[category].faces[face] +'</div>';
  }
  html+='</div>';
}

document.getElementById('lennyfaces').innerHTML = html;
