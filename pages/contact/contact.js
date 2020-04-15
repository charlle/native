/* 
  PAGE: CONTACT US 


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Office from '../../core/offices/index.js';
import Google from '../../lib/google.js';
import {Text} from '../../lib/core.js';


async function ContactUs() {
  // Pull Content
  let content = await Text('pages');
  let w = content.contact;


  let img = "assets/img/bg-contact.jpg";
  let msg = w.banner;

  let office = new Office();
	office.render(false, true);

  Google();
  Header();
  Banner(img, msg);
  Contact();
  Footer();	
}

export default ContactUs();