/* 
  SERVICES 


*/

import {Insert, Render, Text} from '../../lib/core.js';
import {targets} from '../../content/targets.js';
import Format from '../../lib/format.js';

function buildNames(v) {
  let format = new Format();
  let c = v.toLowerCase();
  let name = format.firstCap(c);

  return name;
}


// Return Services
export default async function Services() {
  // Pull Content
  let content = await Text('core');
  let w = content.services;
	
	// Pull Links
  let lang = window.app.lang;
  
  let servNames = [], servLinks = targets.services[`${lang}`];
  for (const s of servLinks) {
    let name = buildNames(s);
    servNames.push(name);
  }

  const html = 
    `<section class="services">
	    <div class="box center">
	      <h2>${w.H1}</h2>

	      <a href="javascript:app.Click('practice')" class="view center">
	        ${w.A1}
	      </a>

	      <div class="box_three left">
	        <img src="assets/img/icon-family.png" />
	        <a href="javascript:app.Click('${servLinks[6]}')">
	          ${servNames[6]}
	        </a>
	      </div>

	      <div class="box_three">
	        <img src="assets/img/icon-litigation.png" />
	        <a href="javascript:app.Click('${servLinks[7]}')">
	          ${servNames[7]}
	        </a>
	      </div>

	      <div class="box_three right">
	        <img src="assets/img/icon-mediation.png" />
	        <a href="javascript:app.Click('${servLinks[9]}')">
	          ${servNames[9]}
	        </a>
	      </div>

	      <div class="box_three left">
	        <img src="assets/img/icon-immigration.png" />
	        <a href="javascript:app.Click('${servLinks[0]}')">
	          ${servNames[0]}
	        </a>
	      </div>


	      <div class="box_three">
	        <img src="assets/img/icon-student.png" />
	        <a href="javascript:app.Click('${servLinks[1]}')">
	          ${servNames[1]}
	        </a>
	      </div>

	      <div class="box_three right">
	        <img src="assets/img/icon-resident.png" />
	        <a href="javascript:app.Click('${servLinks[4]}')">
	          ${servNames[4]}
	        </a>
	      </div>
    	</div>
    </section>`;

  Insert('core/services/services.css');
  Render(html, document.querySelector('#services'));

  return;
}