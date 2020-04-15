/* 
  RECOMMENDATIONS 


*/

import {Insert, Render, Text} from '../../lib/core.js';

// Return Recommendations
export default async function Recs() {
  let content = await Text('core');
  let recs = '', w = content.recs;

  for(const x of w.data) {
    recs += `
      <div>
        <h4>${x.topic}</h4>
        <p>${x.rec}</p>
        <h6>${x.name}</h6>
      </div>`
  }

  const html = 
    `<section class="recs">
      <div class="box center">
        <h3>${w.H1}</h3>
        ${recs}
      </div>
    </section>`;

  Insert('core/recs/recs.css');
  Render(html, document.querySelector('#recs'));

  return;
}




