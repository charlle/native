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
            Planning to Immigrate to the United States 
            or need help with other legal services. 
        </h5>

        <form action="https://law.us19.list-manage.com/subscribe/post?u=e67364d6f5ebe60b20e622ec3&amp;id=1fab07a4cf"
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
          <b>PLEASE NOTE</b>: Communications sent to us via email through 
          our website are not secure and will not be regarded by 
          us as confidential. Do not send information that you 
          believe is confidential without first speaking with 
          one of our attorneys.
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

