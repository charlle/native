/* 
  FOOTER 

** Add Google Analytics

*/

import Format from '../../lib/format.js';
import {Insert, Render, Text} from '../../lib/core.js';
import {offices} from '../../content/offices.js';
import {targets} from '../../content/targets.js';


function buildNames(v) {
  let format = new Format();
  let c = v.toLowerCase();
  let name = format.firstCap(c);

  return name;
}


// Return Footer
export default async function Footer() {
  let o = offices.find(x => x.order === 1);
  let year = new Date().getFullYear();

  // Pull Content
  let content = await Text('core');
  let w = content.footer;


  // Pull Links
  let lang = window.app.lang;
  
  let fNames = [], fLinks = targets.features[`${lang}`];
  for (const f of fLinks) {
    let name = buildNames(f);
    fNames.push(name);
  }

  const html = 
    `<div class="footer">
      <div class="footer_body">

        <div class="footer_links">
          <img src="assets/img/native.png">
          <h3>${w.H1}</h3>
          <ul>
            <li><strong>${w.L1}</strong></li>
            <li><a href="javascript:app.Click('team')">${w.link1}</a></li>
            <li><a href="javascript:app.Click('about')">${w.link2}</a></li>
            <li><a href="javascript:app.Click('contact')">${w.link3}</a></li>
          </ul>
          <ul>
            <li><strong>${w.L2}</strong></li>
            <li><a href="javascript:app.Click('${fLinks[0]}')">${fNames[0]}</a></li>
            <li><a href="javascript:app.Click('${fLinks[1]}')">${fNames[1]}</a></li>
            <li><a href="javascript:app.Click('${fLinks[2]}')">${fNames[2]}</a></li>
            <li><a href="javascript:app.Click('${fLinks[3]}')">${fNames[3]}</a></li>
            <li><a href="javascript:app.Click('${fLinks[4]}')">${fNames[4]}</a></li>
          </ul>
        </div>

        <div class="footer_copy">
          <p>
            ${w.P1}
          </p>
          <ul>
            <li><a href="javascript:app.Click('legal')">Legal</a></li>
            <li><a href="javascript:app.Click('privacy')">Privacy</a></li>
            <li class="copyright">© ${year} Charlle</li>
          </ul>
        </div>

       </div>

    </div>`;

  Insert('core/footer/footer.css');
  Render(html, document.querySelector('#footer'));

  return;
}







