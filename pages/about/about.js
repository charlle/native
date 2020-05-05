/* 
  ABOUT PAGE 


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Google from '../../lib/google.js';
import {Render, Text} from '../../lib/core.js';


async function Overview() {
  // Pull Content
  let content = await Text('pages');
  let w = content.about;

	let html = 
		`<section>
      <div class="box center">
        <h3>${w.H1}</h3>
        <p>${w.M1}</p>
      </div>
    </section>

    <section class="about">
      <div class="box center">

        <div class="box_three left">
          <img src="assets/img/a-class.png">
          <h4>${w.valH1}</h4>
          <p>${w.valM1}</p>
        </div>

        <div class="box_three">
          <img src="assets/img/a-module.jpg">
          <h4>${w.valH2}</h4>
          <p>${w.valM2}</p>
        </div>

        <div class="box_three right">
          <img src="assets/img/a-async.png">
          <h4>${w.valH3}</h4>
          <p>${w.valM3}</p>
        </div>
        
      </div>
    </section>

<!-- RECOGNITION --->
    <section class="silver">
      <div class="box">

        <div class="box_two right">
	        <h3>${w.recH}</h3>
	        <p>${w.recM}</p>
        </div> 

        <div class="box_two left">
          <ul>
            <li>
              <img src="assets/img/icon-award.png">
              ${w.lead1}
            </li>
            <li>
              <img src="assets/img/icon-award.png">
              ${w.lead2}
            </li>
            <li>
              <img src="assets/img/icon-award.png">
              ${w.lead3}
            </li>
          </ul>
        </div> 

      </div>
    </section>

<!-- OFFICES --->
    <section class="a_offices">
      <div class="box">

        <div class="box_two right">
          <img src="assets/img/a-map.png">
        </div>  

        <div class="box_two left">
	        <h3>${w.officeH}</h3>
	        <p>${w.officeM}</p>
          <a href="https://www.javascript.com" class="view">
            ${w.officeA}
          </a>
        </div>

      </div>
    </section>

<!-- CONTRIBUTORS --->
    <section class="a_devs">
      <div class="box center">
        <h3>${w.devsH}</h3>
        <p>${w.devsM}</p>
        <a href="https://github.com/charlle/native/issues" class="view">
          ${w.devsA}
        </a>
      </div>
    </section>`;

  Render(html, document.querySelector('#about'));
}


async function About() {
  // Pull Content
  let content = await Text('pages');
  let w = content.about;

	let img = "assets/img/bg-about.png";
  let msg = w.banner;

  Google();
  Header();
  Banner(img, msg);
  Overview();
  Contact();
  Footer();	
}

export default About();



