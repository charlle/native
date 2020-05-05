/*

  BLOG 


*/

import Menu from './menu.js';
import Next from './next.js';

import {Insert, Render, loadDoc} from '../../lib/core.js';
import {targets} from '../../content/targets.js';
import Content from '../../lib/content.js';


export default class Blog {
  constructor(page, cat) { 
    this.state = {
      arr: [],
      views: '',
      body: '',
      cat: cat,
      page: page
    }

    this.cont = new Content();
   
    let lang = window.app.lang
    if(cat) {
      if(cat == 'features') { 
        this.urls = targets[cat][lang]; 
        if(!this.urls.find(x => x === page)) { 
          this.state.page = 'features';
        }
      }
      else { this.urls = targets[cat]; }
    }
  }


  // Method: changeView
  changeView(v) {
    let body = this.state.arr[v]

    //Build View Links
    let i = 0, s = `<div class="views">`;
    for(const x of this.state.arr) {
      if(i !== v) { 
        // First One Displayed
        s += `<a href="javascript:app.blog.changeView(${i})">
              ${x.view}
              </a>`;
      }
      i++;
    }
    s += `</div>`; 

    document.getElementsByClassName("views")[0].innerHTML = s;
    document.getElementById("body").innerHTML = body.text;
  }


  // Method: buildViews
  buildViews(arr) {

    // Convert Content
    let i = 0;
    for(const v of arr) {
      this.state.arr[i] = this.cont.fromMD(v);
      i++;
    }


    //Build View Links
    let v = 0, s = `<div class="views">`;
    for(const x of this.state.arr) {
      if(v !== 0) { 
        // First One Displayed
        s += `<a href="javascript:app.blog.changeView(${v})">
              ${x.view}
              </a>`;
      }
      v++;
    }
    s += `</div>`; 


    this.state.views = s;
    this.state.body = this.state.arr[0].text;
  }


  // Method: checkBreaker
  checkBreaker(file) {
    let arr = file.split("****");
    if(!arr) return;
    if(arr[1]) return this.buildViews(arr);


    let body = this.cont.fromMD(arr[0]);
    this.state.body = body.text;
  }


  // Build Blog
  async buildBlog(menu, next) {
    let page, file, full = '';

    // Add Full Width
    if(!menu) full = 'full';

    // Pull MarkDown
    let folder = 'content/' + window.app.lang + '/';
    let sub = (this.state.cat) ? this.state.cat : 'features';
    page = folder + sub + "/" + this.state.page + ".md"; 
    
    file = await loadDoc(page);

    if(!file) return;
    this.checkBreaker(file);


    let blog = 
      `<article>
        <div class="box">
          <!-- MENU --->
          ${menu}

          <!-- BLOG --->
          <div class="blog ${full}">

            <div id="body">
            ${this.state.body}
            </div>

          ${this.state.views}
          ${next}
          </div>
        </div>
      </article>`;


    return blog;
  }


  // Display
  async display() {
    let html = '',
        menu = '', 
        next = '',
        cat = this.state.cat,
        page = this.state.page;

    if(!this.urls && !page) return;

    if(cat) {
      menu = Menu(this.urls, page, cat);
      next = Next(this.urls, page);
    }

    html = await this.buildBlog(menu, next);

    Insert('core/blog/blog.css');
    Render(html, document.querySelector('#blog'));

  }


}

/*

  BLOG HTML LAYOUT

  <article>
    <div class="box">

  <!-- MENU --->
      <div class="menu">
        <ul>
          <li><span>Services</span></li>
          <li>
            <a href="javascript:app.Click('immigration')" 
            class="highlight">
            Immigration
          </a></li>
          <li><a href="javascript:app.Click('family-office')"
            class="">
            Family Office
          </a></li>
          <li><a href="javascript:app.Click('litigation')"
            class="">
            Litigation
          </a></li>
          <li><a href="pages/practice/arbitration.html"
            class="">
            Arbitration & Mediation
          </a></li>
        </ul>
      </div>

  <!-- CONTENT --->
      <div class="blog">
        <h3>Immigration</h3>
        <p>
          We have the experience necessary to represent our clients before state, federal and governmental agencies. The immigration rules are constantly in review, but our legal team offers professional expertise to deliver the best results. Our Law Firm provides solutions to live, work and invest in the United States. We can also provide assistance with applications for work authorization, permanent residency, and naturalization.
        </p>

  <!-- LINKS --->   
        <div class="links">
          <a href="" 
            class="link_left hide">
          </a>
          <a href="pages/practice/family-office.html" 
            class="link_right">
            Family Office
          </a>
        </div>  
      </div>

    </div>
  </article>
  
*/


