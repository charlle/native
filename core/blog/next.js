/*
BUILD NEXT LINKS


*/

import Format from '../../lib/format.js';

export default function Next(u, page) {
  let format = new Format();

  // Bottom links: fwd and back
  function buildLinks(urls) {
    let i = urls.indexOf(page);
    let l = urls.length - 1;
    let hide = 'hide',
        back = '', backText = '',
        fwd = '', fwdText = '',
        b = '', 
        f = '';
    

    // !page: show first url
    if(i == -1) {
      b = hide;
      fwd = urls[0];

    // last url: show first + second to last
    } else if(i == l) {
      if(urls[i-1]) back = urls[i-1];
      fwd = urls[0]; 

    // show prev + post 
    } else {
      if(urls[i-1]) back = urls[i-1];
      if(urls[i+1]) fwd = urls[i+1]     
    }

    if(!back) b = hide;
    if(!fwd) f = hide;

    backText = format.firstCap(back);
    fwdText = format.firstCap(fwd);

    let links =
      `<div class="links">
        <a href="javascript:app.Click('${back}')" 
            class="link_left ${b}">
            ${backText}
        </a>
        <a href="javascript:app.Click('${fwd}')" 
            class="link_right ${f}">
            ${fwdText}
        </a>
      </div>`;

  
    return links
  }

  let	next = buildLinks(u);

  return next;
}