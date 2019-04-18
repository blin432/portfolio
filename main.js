function checkScroll(){
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
  }else{
      $('.navbar').removeClass("scrolled");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}

$(function(){ 
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
      navMain.collapse('hide');
  });
});




// Add no-touch class to body for mobile touch events and toggle hover class on elements that need it
if ("ontouchstart" in document.documentElement) {
  document.documentElement.className += " touch";
}

// Add and remove no-hover class to <li>'s for mobile hover events
jQuery('.touch .container').each(function() {
  var div = jQuery(this);
  
  div.hover(function() {
    div.removeClass('no-hover');
  });
  
  jQuery('*').not(div).bind('click', function() {
    div.addClass('no-hover');
  });
  
});


