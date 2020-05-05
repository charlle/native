/* 
	Google Analytics



*/

export default function Google() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165602260-1');



  // FACEBOOK MESSENGER
  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v5.0'
    });
  };

  (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}




