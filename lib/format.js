/*
		Javascript Library

		Formatting

*/


export default class Format {

	/*
    Method: firstCap
		Param: string title
		Resp: capitalized first letters
  */
  firstCap(string) {
  	if(!string) return;

    let text = '';
    let str = string.toLowerCase();
    let arr = str.split('-');
    for (const v of arr) {
      text += v.charAt(0).toUpperCase();
      text += v.slice(1) + ' ';
    }
    text.trim()

    return text;
  }


	/*
    Method: url
		Param: search query
		Resp: json object
  */
	url(u) {
		if(!u) return;
		let url = u.toString().trim().substring(1);
				url = decodeURI(url).replace(/['"]+/g, '');
				url = url.replace(/&/g, "\",\"").replace(/=/g,"\":\"");
				url = JSON.parse('{"' + url + '"}');

		return url;
	}

	/*
    Method: email
		Param: email
		Resp: valid email
  */
	email(e) {
		let res = {};
		if(!e) return res = {value: e, valid: false, msg: 'Enter Email'};
		let email = e.toString().toLowerCase().trim();
		let reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
		let valid = reg.test(email);

		if (valid) {
			res = {value: email, valid: valid, msg: ''};
		} else {
			res = {value: email, valid: valid, msg: 'Invalid Email 😖'};
		}

    return res;
	}

	/*
    Method: phone
		Param: phone number
		Resp: +1 (267) 974-6029
  */
	phone(n) {
		let res = {};
		if(!n) return res = {value: n, valid: false, msg: 'Enter Mobile Phone'};
		
		// VALIDATE
		let reg  = /\D/g;
		let p = n.replace(reg, '').toString();
		let valid = (p.length === 10);

		// FORMAT
    let mobile = '(' + p.slice(0,3) + ') ';
        mobile += p.slice(3,6) + '-';
        mobile += p.slice(6);

		if (valid) {
			res = {value: mobile, valid: valid, msg: ''};
		} else {
			res = {value: mobile, valid: valid, msg: 'Invalid Mobile 😖'};
		}

    return res;
	}

	/*
    Method: number
		Param: string
		Resp: only numbers
  */
	number(s) {
		let n = s.toString();
		let reg  = /\D/g;
		let v = n.replace(reg, '');

		return v;
	}
}