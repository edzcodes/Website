$(document).ready(() => {
//   $('#navButton').on('click', () => {  

//   //side menu visible and non vivible  
//   var menu = $('#sidemenu');
//   if (menu.hasClass("visible")) {
//      menu.removeClass('visible').animate({'left':'350px'});
//      $('nav, #mycarousel,#footerCustom').animate({'margin-right':'0px'});
//      $('article').animate({'margin-right':'602px'});
//   } else {menu.addClass('visible').animate({'left':'-350px'});
//   $('nav, #mycarousel,#footerCustom').animate({'margin-right':'350px'});
//   $('article').animate({'margin-right':'750px'});

// }   
//  });

//prevent image right click saveAs

$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
})

var bodyPage = $('body');
$('#navButton').on('click', () => {
  if (bodyPage.hasClass('left')){
    //change hamburger menu to cross remove icon
  $("#hamburgermenu").removeClass("fas fa-times").addClass("fas fa-bars");
  bodyPage.animate({'margin-right':'0px'});
  $('nav').animate({'margin-right': '0px'});
  $('#sidemenu').animate({'right':'-350px'});
  bodyPage.removeClass('left');
  }
  else {
    $("#hamburgermenu").removeClass("fas fa-bars").addClass("fas fa-times");
    bodyPage.animate({'margin-right':'350px'});
    $('nav').animate({'margin-right': '350px'});
    bodyPage.addClass('left');
    $('#sidemenu').animate({'right':'350px'});
  }

});
var bodyPage = $('body');



  var scroll_pos = 0;
  $(document).scroll(function() { 
                  scroll_pos = $(this).scrollTop();
                  if(scroll_pos > 210) {
                   
                      $("nav").css('background-color', 'white');
                      $("nav a").css('color', 'black');
                      
                      //swap from black to grey
                      $('nav a').hover(function () {
                        $(this).css('color', 'grey');
                      },
                      function () {
                        $(this).css('color', 'black');
                      });
            //swapping menu icon ED from white to orange as you scroll down
                      $('#icon').attr('src', 'images/orangelabel.png');
  
                     
                  } else if (scroll_pos <= 210 ){
                   
                    $("nav").css('background-color', 'black');
                    $("nav a").css('color', 'grey');
                    
                    //swap from grey to white
                    $('nav a').hover(function () {
                      $(this).css('color', 'white');
                    },
                    function () {
                      $(this).css('color', 'grey');
                    });
                    //swapping menu icon ED from orange to white as you scroll down
                    $('#icon').attr('src', 'images/whitelabel.png');
                  } 
              
          
  });





//hover over text in navigation bar change scolour from grey to white


//change button opacity when hover over
  $('button').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });
  $('button').mouseleave(function() {
    $(this).fadeTo('fast', 0.6);
  });
  




//make navbar invisible if window size less than 500, we use 992 because that is the 
//medium size for bootstrap navbar when it automatically collapses 
var navbar = $('nav');
var sidenavbar = $('#sidenavbar');
//initially make it invisible
sidenavbar.addClass('invisible')
sidenavbar.css('height', 0);
//navbar.addClass('invisible')

function hideNavBars(){if($(window).width() <= 992){

  
  navbar.addClass('invisible')
  sidenavbar.removeClass('invisible');
  sidenavbar.css('height', 100);
  $('#sidenavbarseperator').removeClass('invisible');
 

} else if ($(window).width() >= 992){

    
    navbar.removeClass('invisible');
    sidenavbar.addClass('invisible');
    sidenavbar.css('height', 0);
    $('#sidenavbarseperator').addClass('invisible');
   

 }}


hideNavBars();
$(window).resize(() => {hideNavBars()});
  




});





