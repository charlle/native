/* 
  PAGE: PEOPLE


*/

import Header from '../../core/header/index.js';
import Blog from '../../core/blog/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Google from '../../lib/google.js';

import {
  Meta,
  Title, 
  Insert, 
  Render, 
  Location
} from '../../lib/core.js';
import {team} from '../../content/team.js';

function Profile(url) {

	let obj = team.find(x => x.url === url);

  let html =
    `<section class="person">
      <div class="box">
        <img src="assets/team/${obj.image}">
        <div class="p_details">
          <h2>${obj.name}</h2>
          <h4>${obj.title}</h4>
          <ul>
            <li>${obj.city}</li>
            <li><a href="tel:${obj.phone}">${obj.phone}</a></li>
            <li><a href="mailto:${obj.email}">${obj.email}</a></li>
            <li><a href="${obj.cal}" class="schedule">Schedule Conversation</a></li>
          </ul>
        </div>
      </div>
    </section>`;


  Meta("description", `${obj.name} is a ${obj.title} based in ${obj.city}`);
  Meta("keywords", `${obj.name}, ${obj.title}, ${obj.city}`);
  Title(`${obj.name} | TMCT Law Firm`);
	Insert('pages/people/people.css');
	Render(html, document.querySelector('#profile'));
	
	return;
}


function Load() {
	let cat = 'people';
  let page = Location();

  // Set Default
  if(!page) page = 'cherish-thompson';

  // Prettier URL
  //window.history.replaceState(null, null, `people/${page}`);
	
	let blog = new Blog(page, cat);
  blog.display();

  window.app.blog = blog;

  Profile(page);

  Google();
  Header();
  Contact();
  Footer();	
}

export default Load();