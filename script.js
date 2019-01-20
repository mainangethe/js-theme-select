const page_html = document.querySelector('html');
const page_select = document.querySelector('select');

function colorUpdate( bg_color, fg_color) {
  page_html.style.background = bg_color;
  page_html.style.color = fg_color;
  page_select.disabled = true;
}

futureDetermination = function() {
  let user_choice = page_select.value;
  (user_choice === 'dark') ?
  colorUpdate(  'linear-gradient(-225deg, #000 0%, #C30032 52%, #F11B52 100%)' , 'black') :
  colorUpdate( 'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)', 'white');
}

page_select.addEventListener('change', futureDetermination);
