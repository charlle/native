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
  
  let servNames = [], servLinks = targets.services[`${lang}`];
  for (const s of servLinks) {
    let name = buildNames(s);
    servNames.push(name);
  }

  const html = 
    `<div class="footer">
      <div class="footer_body">

        <div class="footer_links">
          <img src="assets/img/tmct.png">
          <h3>${w.H1}</h3>
          <ul class="fl_wide">
            <li><strong>${w.L1}</strong></li>
            <li><a target="blank" 
              href="${o.map}">
              ${o.suite} <br/>
              ${o.street} <br/>
              ${o.city}
            </a></li>
            <li><a href="tel:${o.phone}">
              ${o.phone}
            </a></li>
            <li><a href="mailto:info@tmct.law">
              info@tmct.law
            </a></li>
          </ul>
          <ul>
            <li><strong>${w.L2}</strong></li>
            <li><a href="javascript:app.Click('about')">${w.link1}</a></li>
            <li><a href="javascript:app.Click('team')">${w.link2}</a></li>
            <li><a href="javascript:app.Click('offices')">${w.link3}</a></li>
            <li><a href="javascript:app.Click('careers')">${w.link4}</a></li>
            <li><a href="javascript:app.Click('contact')">${w.link5}</a></li>
          </ul>
          <ul>
            <li><strong>${w.L3}</strong></li>
            <li><a href="javascript:app.Click('${servLinks[0]}')">${servNames[0]}</a></li>
            <li><a href="javascript:app.Click('${servLinks[1]}')">${servNames[1]}</a></li>
            <li><a href="javascript:app.Click('${servLinks[2]}')">${servNames[2]}</a></li>
            <li><a href="javascript:app.Click('${servLinks[3]}')">${servNames[3]}</a></li>
            <li><a href="javascript:app.Click('${servLinks[4]}')">${servNames[4]}</a></li>
          </ul>
        </div>

        <div class="footer_copy">
          <p>
            ${w.P1}
            ${o.street} ${o.suite}, ${o.city} & ${o.phone}.
          </p>
          <ul>
            <li><a href="javascript:app.Click('legal')">Legal</a></li>
            <li><a href="javascript:app.Click('privacy')">Privacy</a></li>
            <li class="copyright">© ${year} TMCT PLLC</li>
          </ul>
        </div>

       </div>
       <!-- Google Tag Manager (noscript) -->
       <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9QKJ8L"
       height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       <!-- End Google Tag Manager (noscript) -->
    </div>`;

  Insert('core/footer/footer.css');
  Render(html, document.querySelector('#footer'));

  return;
}







