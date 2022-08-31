$(function() {
  
    console.log( "Mark Rabadana - custom theme by georgkettele.com - based on HUGO" );
    
    
    $('.work-gallery').flickity({
      wrapAround: true,
      pageDots: false,
      draggable: true,
  		lazyLoad: 2
    });
    
    
    let firstTimeVisit = 'true';
    // Set a Cookie
    function setCookie(cName, cValue, expDays) {
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
    // Apply setCookie
    setCookie('firsttimevisit', firstTimeVisit, 1);
    
    let cookies = document.cookie;
    
    console.log(cookies); 
    
    
});