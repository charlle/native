/* 
  BANNER 



*/

import {Insert, Script, Render, Text} from '../../lib/core.js';

// Return Banner
export default async function Banner(img, msg, sub) {
  let content = await Text('core');
  let w = content.banner;
  
  let b = `background-image:url(${img})`;
  let m, s = '', c = 'banner';
  if (msg) m = `<h1>${msg}</h1>`;
  if (sub) s = `<h2>${sub}</h2>`, c = 'banner_sub';

  const html = 
    `<section class="${c}" style=${b}>
      <div class="box">
        ${m}
        ${s}
      </div>
      <button class="schedule" 
        onclick="Calendly.initPopupWidget({url: 'https://calendly.com/tmct-law-firm/consulting'});return false;">
        ${w.button}
      </button>
    </section>`;

  Insert('core/banner/banner.css');
  Render(html, document.querySelector('#banner'));

  // Calendly
  Insert('https://assets.calendly.com/assets/external/widget.css');
  Script('https://assets.calendly.com/assets/external/widget.js');
  
  return;
}




