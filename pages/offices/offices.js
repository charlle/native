/* 
  PAGE: OFFICES


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Office from '../../core/offices/index.js';
import Google from '../../lib/google.js';
import {Text} from '../../lib/core.js';


async function Load() {
  // Pull Content
  let content = await Text('pages');
  let w = content.offices;

	let img = "assets/img/bg-offices.png";
	let msg = w.banner;

	let office = new Office();
	office.render(true, true);

  Google();
  Header();
  Banner(img, msg);
  Contact();
  Footer();	
}

export default Load();