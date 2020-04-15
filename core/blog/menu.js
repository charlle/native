/*
BUILD MENU


*/

import Format from '../../lib/format.js';

export default function Menu(urls, page, cat) {
  let format = new Format();

  // Side Menu Navigation
  function buildList(v) {
    let highlight = '';
    let c = v.toLowerCase();
    let s = format.firstCap(c);
    
    if(v == page) highlight = 'highlight';

    let link = 
      `<li>
        <a href="javascript:app.Click('${c}')" 
          class="${highlight}">
          ${s}
        </a>
      </li>`;

    return link;
  }

  function buildMenu(list) {
    let title = format.firstCap(cat);

    let html = 
      `<div class="menu">
        <ul>
          <li><span>${title}</span></li>
          ${list}
        </ul>
      </div>`;

    return html;
  }

  let	menu = '';
  let list = '';

  if(urls) {
	  for (const v of urls) {
      list += buildList(v);
    }
  }

  if(list) {
  	let menu = buildMenu(list);
  	return menu;
  }

  return;
}