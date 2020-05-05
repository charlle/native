/* 
  
  OFFICES


*/

import {Insert, Render} from '../../lib/core.js';
import {offices} from '../../content/offices.js';


export default class Office {
	constructor() { }

	hq() {
		if(!offices) return; 
		let o = offices.find(x => x.order === 1);

		const html =
			`<section>
	      <div class="box">
	        <div class="office">
	          <h2>${o.office}</h2>
	          <ul>
	            <li><a href="tel:${o.msgr}">
	              Messenger
	            </a></li>
	            <li><a href="mailto:${o.page}">
	              Facebook
	            </a></li>
	          </ul>
	          <ul>
	            <li>${o.street}</li>
	            <li>${o.suite}</li>
	            <li>${o.city}</li>
	            <li>United States</li>
	          </ul>
	          <a href="${o.map}"
	            class="view">
	            DIRECTIONS TO OFFICE
	          </a>
	        </div>
	        <div class="office_map">
	          <a  target="blank" 
	              href="${o.map}">
	            <img src="assets/offices/${o.image}">
	          </a>
	        </div>

	      </div>
	    </section>`;

	  return html;
	}
	
	divs(o) {
		if(!o) return;

	  const html = 
	    `<div class="offices">
        <h3>${o.office}</h3>
        <img src="assets/offices/${o.image}">
        <ul>
          <li><a target="blank" 
            href="${o.map}">
            ${o.street}, ${o.suite} <br>
            ${o.city}
          </a></li>
          <li><a href="tel:${o.phone}">
            ${o.phone}
          </a></li>
          <li><a href="mailto:${o.email}">
            ${o.email}
          </a></li>
        </ul>
      </div>`;

	  return html;
	}

	section() {
		let divs = '';
		for(const o of offices) {
			if(o.order !== 1) divs += this.divs(o);
		}

		const html = 
			`<section>
				<div class="box center">
					${divs}
				</div>
			</section>`;

		return html;
	}

	render(o, h) {
		if(o) { 
			const html = this.section();
			Render(html, document.querySelector('#offices'));
		}

		if(h) {
			const hq = this.hq();
			Render(hq, document.querySelector('#hq'));
		}

		Insert('core/offices/offices.css');

		return;
	}

}