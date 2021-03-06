/* 
  
  PAGE: 404 

  ** Universal Redirect
  GitHub Pages sends all unknown
  urls to this page, hook and redirect


*/

import Header from './core/header/index.js';
import Banner from './core/banner/index.js';
import Contact from './core/contact/index.js';
import Footer from './core/footer/index.js';

import {Location} from './lib/core.js';
import {targets} from './content/targets.js';

function Redirect() {
	let page = Location();

  // CHECK PERMA LINKS
	// Pull Services by Language
	let lang = window.app.lang;
	let features = targets.features[`${lang}`];
	
	let people = targets.people;
	let tgt = features.concat(people);

	let url = tgt.find(x => x === page);

	if(!url) return;

	if(people.find(x => x === page)) {
		url = 'pages/people/index.html?page=' + url;
	}

	if(features.find(x => x === page)) {
		url = 'pages/features/index.html?page=' + url;
	}

	// REDIRECT TO PAGE
	return window.location = url;
}


function NotFound() {

	// REDIRECT ** if perma link
	Redirect();

	// DISPLAY 404 PAGE
	let img = "assets/img/bg-404.png";
	let msg = "404 - Page Not Found";
	let sub = `Are you lost?`;



  Header();
  Banner(img, msg, sub);
  Contact();
  Footer();	
}


export default NotFound();