/* 
  PAGE: TEAM


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';

import {Insert, Render, Text} from '../../lib/core.js';
import {team} from '../../content/team.js';
import Google from '../../lib/google.js';


function Team() {
  let html = '';

  for (const obj of team) {
  	html +=
  		`<div class="team">
		    <img src="assets/team/${obj.image}" alt="${obj.name}">
		    <h4>
		    	<a href="javascript:app.Click('${obj.url}')">
		    	${obj.name}
		    	</a>
		    </h4>
		    <h5>${obj.title}</h5>
		    <ul>
		      <li>${obj.city}</li>
		      <li><a href="tel:${obj.phone}">${obj.phone}</a></li>
			  	<li><a href="mailto:${obj.email}">${obj.email}</a></li>
		    </ul>
		  </div>`;
  }


	Insert('pages/team/team.css');
	Render(html, document.querySelector('#team'));
	
	return;
}


async function Load() {
  // Pull Content
  let content = await Text('pages');
  let w = content.team;

  let img = "assets/img/bg-team.jpg";
  let msg = w.banner;

  Google();
  Header();
  Banner(img, msg);
  Team(); 
  Contact();
  Footer();	
}

export default Load();