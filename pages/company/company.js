/* 
  PAGE: SERVICES


*/

import Header from '../../core/header/index.js';
import Blog from '../../core/blog/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Google from '../../lib/google.js';


export default function Load(page, cat) {

	let practice = new Blog(page);

  Google();
  Header();
  practice.display();
  Contact();
  Footer();	
}
