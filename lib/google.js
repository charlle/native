/* 
	Google Analytics



*/

export default function Google() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-149448749-1');

  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-M9QKJ8L');


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



  // MAILCHIMP POPUP
  (function(c,h,i,m,p){ m=c.createElement(h),p=c.getElementsByTagName(h)[0],
    m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,
    "script","https://chimpstatic.com/mcjs-connected/js/users/e67364d6f5ebe60b20e622ec3/177f881d84bfd26136c93ee58.js"
  ));
}




