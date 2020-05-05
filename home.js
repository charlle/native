/* 
  HOME PAGE 


*/

import Header from './core/header/index.js';
import Banner from './core/banner/index.js';
import Recs from './core/recs/index.js';
import Contact from './core/contact/index.js';
import Features from './core/features/index.js';
import Footer from './core/footer/index.js';
import Google from './lib/google.js';
import {Render, Text} from './lib/core.js';

async function Values() {
  // Pull Content
  let content = await Text('pages');
  let w = content.home;

  const html = 
    `<section class="silver">
      <div class="box">

        <div class="box_two left">
          <img src="assets/img/home-components.png" alt="Web Components" />
        </div>
        <div class="box_two right">
          <h3>${w.H1}</h3>
          <p>${w.M1}</p>
        </div>

      </div>
    </section>

    <section>
      <div class="box">

        <div class="box_two left">
          <h3>${w.H2}</h3>
          <p>${w.M2}</p>
        </div>
        <div class="box_two right">
          <img src="assets/img/home-assets.png" alt="Static Assets" />
        </div>

      </div>
    </section>

    <section class="silver">
      <div class="box">

        <div class="box_two left">
          <img src="assets/img/home-hosting.png" alt="Free Hosting" />
        </div>
        <div class="box_two right">
          <h3>${w.H3}</h3>
          <p>${w.M3}</p>
        </div>

      </div>
    </section>`;

  Render(html, document.querySelector('#values'));
}


async function Home() {
  // Pull Content
  let content = await Text('pages');
  let w = content.home;

	let img = "assets/img/bg-home.jpg";
	let msg = w.banner;
	let sub = w.sub;
    
  Google()
  Header('', 'light');
  Banner(img, msg, sub);
  Features();
  Values();
  Recs();
  Contact();
  Footer();	
}


export default Home();
