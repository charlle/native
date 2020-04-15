/* 
  HEADER 


*/

import {Insert, Render} from '../../lib/core.js';

export function Open(state) {
  Header(state);
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
export default function Header(state) {
  let show = '';
  if(state === 'open') show = 'show';
  if(state === 'close') show = '';

  const html = `
    <!-- Load Facebook Messenger -->
        <div id="fb-root"></div>
        <!-- Your customer chat code -->
        <div class="fb-customerchat"
          attribution=setup_tool
          page_id="1905306419750517"
          theme_color="#99CCFF"
          logged_in_greeting="Hi! How can we help you?"
          logged_out_greeting="Hi! How can we help you?">
        </div>
    <!-- END Facebook Messenger -->

    <div class="overlay ${show}" onclick="javascript:app.Open('close')"></div>
    <div class="navbar ${show}">
      <a href="index.html"><img src="assets/img/tmct.png" alt="TMCT"/></a>
      <a href="javascript:app.Click('contact')">contact</a>
      <a href="javascript:app.Click('about')">about</a>
      <a href="javascript:app.Click('team')">people</a>
      <a href="javascript:app.Click('services')">services</a>
      <a class="close" href="javascript:app.Open('close')">close</a>
    </div>


    <div class="box">
      <div>
        <a href="index.html" class="logo"><img src="assets/img/tmct.png" alt="TMCT"/></a>
        <div>
          <h1>TMCT Law Firm</h1>
          <hr class="black"/>
          <hr/>
          <h6>WASHINGTON DC . NEW YORK . LONDON . FLORIDA</h6>
        </div>
      </div>

      <select id="lang" onchange="javascript:app.Translate(this.value)">
        <option value="english"`+ Select('english') +`>English</option>
        <option value="spanish"`+ Select('spanish') +`>Spanish</option>
      </select>

      <nav>
        <a href="javascript:app.Click('contact')">contact</a>
        <a href="javascript:app.Click('about')">about</a>
        <a href="javascript:app.Click('team')">people</a>
        <a href="javascript:app.Click('services')">services</a>
      </nav>

      <button type="button" class="header_menu" 
        onclick="javascript:app.Open('open')">
        <img src="assets/img/menu.png" alt="Menu"/>
      </button>
    </div>`;

  Insert('core/header/header.css');
  Render(html, document.querySelector('#header'));

  return;
}

window.app.Open = Open;
window.app.Translate = Translate;

