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
  let w = content.features;
	
	// Pull Links
  let lang = window.app.lang;
  
  let fNames = [], fLinks = targets.features[`${lang}`];
  for (const f of fLinks) {
    let name = buildNames(f);
    fNames.push(name);
  }

  const html = 
    `<section class="features">
	    <div class="box center">
	      <h2>${w.H1}</h2>

	      <a href="javascript:app.Click('practice')" class="view center">
	        ${w.A0}
	      </a>

	      <div class="box_three left">
	        <img src="assets/img/icon-javascript.png" />
	        <h4>
	        	<a href="javascript:app.Click('${fLinks[2]}')">
	        	${w.A1}
	        	</a>
	        </h4>
	        <p>${w.F1}</p>
	      </div>

	      <div class="box_three">
	        <img src="assets/img/icon-markdown.png" />
	        <h4>
	        	<a href="javascript:app.Click('${fLinks[1]}')">
	          ${w.A2}
	        	</a>
	        </h4>
	        <p>${w.F2}</p>
	      </div>

	      <div class="box_three right">
	        <img src="assets/img/icon-translation.png" />
	        <h4>
	        	<a href="javascript:app.Click('${fLinks[3]}')">
	          ${w.A3}
	        	</a>
	        </h4>
	        <p>${w.F3}</p>
	      </div>

    	</div>
    </section>`;

  Insert('core/features/features.css');
  Render(html, document.querySelector('#features'));

  return;
}