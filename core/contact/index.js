/* 
  CONTACT 
  - Mailchimp



*/

import {
  Insert,
  Script,
  Render,
  Text
} from '../../lib/core.js';
import Mailchimp from '../mailchimp/index.js';




// Return Contact
export default async function Contact() {
  let content = await Text('core');
  let w = content.contact;

  let html =
    `<div class="email">
      <div class="email_body">
        <div class="email_left">
          <h4>${w.H1}</h4>
          <p>${w.P1}</p>
          <!-- CONTRIBUTE --->
          <button class="email_btn" 
            onclick="javascript:app.Click('docs')">
            ${w.B1}
          </button>
        </div>

        <div class="email_right">
          <h4>${w.H2}</h4>
          <p>${w.P2}</p>

          <!-- CONTACT US --->
          <button class="email_btn"
            onclick="javascript:app.openChimp('open')">
            ${w.B2}
          </button>
        </div>
      </div>
    </div>
    <div id="chimp"></div>`;

  Insert('core/contact/contact.css');
  Render(html, document.querySelector('#contact'));
  Mailchimp();

  return;
}