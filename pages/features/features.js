/* 
  PAGE: FEATURES


*/

import Header from '../../core/header/index.js';
import Blog from '../../core/blog/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';

import {Location} from '../../lib/core.js';
import Google from '../../lib/google.js';


function Load() {
	let cat = 'features';
  let page = Location();


  // Set Default
  if(!page) page = 'features';

  //window.history.replaceState(null, null, `features/${page}`);

	let blog = new Blog(page, cat);
  blog.display();

  Google();
  Header();
  Contact();
  Footer();	
}

export default Load();