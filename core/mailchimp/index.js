/* 
  MAILCHIMP 

*/

import {Insert, Render} from '../../lib/core.js';

export function openChimp(state) {
  Mailchimp(state);
  console.log('hello')
}


// Return Mailchimp
export default function Mailchimp(state) {
  let show = 'none';
  if(state === 'open') show = ' ';
  if(state === 'close') show = 'none';

  const html = `
    <div class="mc_overlay ${show}" onclick="javascript:app.openChimp('close')"></div>

    <div class="mailchimp ${show}">
      
      <div class="mc_left">
        <h5>
            Native Js is truly liberating. Free from builds, servers, and host providers. Stay updated with the latest releases.
        </h5>

        <form action="https://law.us19.list-manage.com/subscribe/post?u=e67364d6f5ebe60b20e622ec3&amp;id=994786ade2"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
          target="_blank" novalidate>

          <div class="field_group">
            <label for="EMAIL">Email Address <span>*</span></label>
            <input type="email" value="" name="EMAIL" id="mce-EMAIL">
          </div>

          <div class="field_group">
            <label for="FNAME">First Name <span>*</span></label>
            <input type="text" value="" name="FNAME" id="mce-FNAME">
          </div>

          <div class="field_group">
            <label for="LNAME">Last Name <span>*</span></label>
            <input type="text" value="" name="LNAME" id="mce-LNAME">
          </div>

          <div class="field_group">
            <label for="PHONE">Phone Number <span>*</span></label>
            <input type="text" value="" name="PHONE" id="mce-PHONE">
          </div>

          <input type="submit" value="Contact Us" name="subscribe"
              id="mc_submit">
        </form>

        <p>
          <b>PLEASE NOTE</b>: We are community of contributors that give our personal time to support this project. If you want to learn more about contributing check out our guidelines.
          <br/>
          <br/>
          <a class="mc_close" href="javascript:app.openChimp('close')">CLOSE</a>
        </p>

      </div>

      <div class="mc_right"></div>

    </div>`;

  Insert('core/mailchimp/mailchimp.css');
  Render(html, document.querySelector('#chimp'));

  return;
}


window.app.openChimp = openChimp;

