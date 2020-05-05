/* 
  HEADER 

  @EDIT
  - update facebook messenger with the page id of 
    your facebook page and your theme color
    page_id="your_fb_page_id"
    theme_color="#brand_color"

*/

import {Insert, Render} from '../../lib/core.js';

export function Open(state, light) {
  Header(state, light);
}

export function Translate(v) {
  window.name = v; // @FIX : this is a hack becareful
  location.reload()
}

export function Select(v) {
  if(v == window.app.lang) return 'selected';
  return;
}


// Return Header
export default function Header(state, light) {
  let show = '';
  if(state === 'open') show = 'show';
  if(state === 'close') show = '';

  const html = `
    <!-- Load Facebook Messenger -->
        <div id="fb-root"></div>
        <!-- Your customer chat code -->
        <div class="fb-customerchat"
          attribution=setup_tool
          page_id="357292271076629"
          theme_color="#333"
          logged_in_greeting="Hi! How can we help you?"
          logged_out_greeting="Hi! How can we help you?">
        </div>
    <!-- END Facebook Messenger -->

    <div class="overlay ${show}" onclick="javascript:app.Open('close')"></div>
    <div class="navbar ${show}">
      <a href="index.html"><img src="assets/img/native-red.png" alt="Native"/></a>
      <a href="javascript:app.Click('contact')">Contact</a>
      <a href="javascript:app.Click('about')">About</a>
      <a href="javascript:app.Click('team')">Team</a>
      <a href="javascript:app.Click('docs')">Docs</a>
      <a class="close" href="javascript:app.Open('close')">close</a>
    </div>


    <div class="box">
      <div>
        <a href="index.html" class="logo"><img src="assets/img/native-red.png" alt="Native"/></a>
        <div>
          <h1 class="${light}">NATIVE</h1>
          <hr class="${light}"/>
          <h6 class="${light}">Native Web Applications with vanilla JavaScript</h6>
        </div>
      </div>

      <select id="lang" onchange="javascript:app.Translate(this.value)">
        <option value="english"`+ Select('english') +`>English</option>
        <option value="spanish"`+ Select('spanish') +`>Spanish</option>
      </select>

      <nav class="${light}">
        <a href="javascript:app.Click('contact')">Contact</a>
        <a href="javascript:app.Click('about')">About</a>
        <a href="javascript:app.Click('team')">Team</a>
        <a href="javascript:app.Click('docs')">Docs</a>
      </nav>

      <button type="button" class="header_menu" 
        onclick="javascript:app.Open('open', '${light}')">
        <img src="assets/img/menu.png" alt="Menu"/>
      </button>
    </div>`;

  Insert('core/header/header.css');
  Render(html, document.querySelector('#header'));

  return;
}

window.app.Open = Open;
window.app.Translate = Translate;

