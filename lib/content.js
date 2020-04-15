/*
		Javascript Library

		Content

*/


export default class Content {
  constructor() {}


  /*
    Method: viewLink
    Param: match, ..., ...
    Resp: Link Text
  */
  viewLink(text) {
    let v = /(^|↵*)(#{1,6})(.*?)([\n\r\↵])/;
    let link = text.match(v);

    if(link) {
      link = link[0].replace(/(↵+)/g, '');
      link = link.replace(/(#{1,6})/g, '').trim();
    }

    return link;
  }


  /*
    Method: items
    Param: match, ..., ...
    Resp: html li element
  */
  listItems(m, p, s) {
    return `\n<li>${m}</li>`; 
  }


	/*
    Method: paragraphs
		Param: match, ..., ...
		Resp: html p element
  */
  paragraphs(m, p, s) {
    return `<p>${m}</p>`; 
  }

	/*
    Method: headers
		Param: match, ..., ...
		Resp: html h element
  */
  headers(m, p, s) {
    let id = s.replace(/\s/g, "-").toLowerCase();
    let n = p.length;
    return `<h${n} id="${id}">${s}</h${n}>`; 
  }

	/*
    Method: fromMD
		Param: string
		Resp: html page
  */
  fromMD(text) {
    if(!text) return text;


    /**
    * Clean up text to make it easier to match
    * Necessary prep work before converting to html 
    * ref: https://github.com/showdownjs/showdown/blob/master/src/converter.js
    *
    * List Items
    * /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gmi;
    */
    text = text.replace(/¨/g, '¨T');
    text = text.replace(/\$/g, '¨D');
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix
    text = text.replace(/\u00A0/g, '&nbsp;');
    text = '\n\n' + text + '\n\n';
    text = text.replace(/^[ \t]+$/mg, '');

    // Grab View Links
    let view = this.viewLink(text);


    // Convert List Items
    let l = /(\n{0,1})(^ {0,3})([*+-]|\d+[.])(.*?)(\n)/gmi;
    text = text.replace(l, this.listItems);

    // Convert Paragraphs
    let p = /^\w+(.*)+[\r\n]$/gmi;
    text = text.replace(p, this.paragraphs);
    
    // Convert Headers
    let h = /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gmi;
    text = text.replace(h, this.headers);


    /**
    * Restore signs 
    *
    */
    text = text.replace(/¨D/g, '$$');
    text = text.replace(/¨T/g, '¨');

    return {text, view};
  }
 
}