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
		    <h4>${obj.name}</h4>
		    <h5>${obj.title}</h5>
		    <ul>
		      <li><a href="${obj.git}">GitHub</a></li>
		      <li><a href="${obj.linkedin}">LinkedIn</a></li>
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