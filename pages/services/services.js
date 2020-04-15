/* 
  PAGE: SERVICES


*/

import Header from '../../core/header/index.js';
import Blog from '../../core/blog/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';

import {Location} from '../../lib/core.js';
import Google from '../../lib/google.js';


function Load() {
	let cat = 'services';
  let page = Location();


  // Set Default
  if(!page) page = 'services';

  //window.history.replaceState(null, null, `services/${page}`);

	let blog = new Blog(page, cat);
  blog.display();

  Google();
  Header();
  Contact();
  Footer();	
}

export default Load();