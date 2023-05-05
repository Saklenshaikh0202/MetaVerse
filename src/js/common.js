var isKeyboardOpen = false;

 
$(".datepicker1").datepicker({
  dateFormat: 'dd/mm/yy',
});

 
function myfunction3 () {

  $('body').on( 'click', function ( e ) {
      // e.stopPropagation();
      $('div.lang-dropdown').removeClass('langlist-showing');
      $ ( 'div.language-list' ).fadeOut(500);
  } );

 
// language selection :: open list 
// language selection :: open list 

$('body').on( 'click', 'div.language-bar div.lang-dropdown a.btn-selectlang', function ( e ) {
  e.stopPropagation();
      // if ( !$( this ).hasClass( 'selectlang-selected' ) ) {
      if ( !$( this ).closest( 'div.lang-dropdown' ).hasClass( 'langlist-showing' ) ) {
      // $( this ).addClass( 'selectlang-selected' );
      // $( this ).
      $( this ).closest( 'div.lang-dropdown' ).addClass( 'langlist-showing' );
      $( this ).siblings( 'div.language-list' ).fadeIn();

         $(this).parent().find('ul.dropdown-sub').addClass('active-dp');// new js added
         $(this).parents().eq(1).siblings().find('ul.dropdown-sub').removeClass('active-dp');// new js added
         $( this ).parents().eq(1).siblings().find( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );// new js added
         $( this ).parents().eq(1).siblings().find( 'div.language-list' ).fadeOut(500);// new js added
      } else {
      // $( this ).removeClass( 'selectlang-selected' );
      // $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
      $( this ).siblings( 'div.language-list' ).fadeOut(500);
          $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' ); // new js added
    }
} );

//-- language selection :: select language

$('body').on( 'click', 'div.language-bar div.language-list ul.lst-languages>li>a', function ( e ) {
e.stopPropagation();
// var currentLanguage = $( this ).closest( 'ul.lst-languages' ).find( 'a.language-selected' ).text();
if ( !$( this ).hasClass( 'language-selected' ) ) {
      $( this ).closest( 'ul.lst-languages' ).find( 'a' ).removeClass( 'language-selected' );
      $( this ).addClass( 'language-selected' );
      var currentLanguage = $( this ).text();
      $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
      $( this ).closest( 'div.lang-dropdown' ).find( 'a.btn-selectlang em' ).html( currentLanguage );
      //$( this ).closest( 'div.lang-dropdown' ).find( 'div.language-list' ).fadeOut(500);
    } else {
      $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
      // $( this ).closest( 'div.lang-dropdown' ).find( 'div.language-list' ).fadeOut(500);
    }
});

$('body').on( 'click', 'div.language-bar div.language-list ul.lst-languages>li.list-nh a ', function ( e ) {
e.stopPropagation();

function myfunction2 (e) {
      // e.stopPropagation();
      $( this ).closest( 'div.lang-dropdown' ).find('div.language-list').show();
    }
    // var currentLanguage = $( this ).closest( 'ul.lst-languages' ).find( 'a.language-selected' ).text();
    console.log("activate");
    //  $('ul.dropdown-sub').show();
    // if ($(this).hasClass('language-selected')){
    //   $(this).siblings('ul.dropdown-sub').addClass('active-dp');
    //   $(this).parents().eq(2).find('a').not('.language-selected').siblings().removeClass('active-dp');
    // }
   
    myfunction2 (); 
});

$('body').on( 'click', 'ul.dropdown-sub li a', function (e) {
// e.stopPropagation();
    console.log('works');
    // var currentLanguage = $( this ).closest( 'ul.lst-languages' ).find( 'a.language-selected' ).text();
    $('ul.dropdown-sub').removeClass('active-dp'); 
    //  var currentLanguage2 = $( this ).text(); 
    $( this ).parents('.language-bar').find( 'div.language-list' ).fadeOut(500);
    $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
    //  $( this ).closest( 'div.lang-dropdown' ).find( 'a.btn-selectlang em' ).html( currentLanguage2 );

});


};

myfunction3();


// $('body').on( 'click', '.main', function () {
//   // e.stopPropagation();
//     console.log('works');
//     $('ul.dropdown-sub').removeClass('active-dp'); 
//     //  var currentLanguage2 = $( this ).text(); 
//      $('div.language-list' ).fadeOut(500);
//      $('div.lang-dropdown' ).removeClass( 'langlist-showing' );
    
// });
 


$('body').on('click', 'button.menu-btn', function (e) {    
  e.stopPropagation();
  console.log('working!');
  if ($(this).hasClass('active')) {
              $(this).removeClass('active')
              $('.global-nav').removeClass('active')
              $('.global-header').removeClass('active')
              $('.right-main-column').removeClass('active')
              $('.search-container').removeClass('active')
          } else {
              $(this).addClass('active')
              $('.global-nav').addClass('active')
              $('.global-header').addClass('active')
              $('.right-main-column').addClass('active')
              $('.search-container').addClass('active')
          }

      var mobileSize = $(window).width();
          if (mobileSize <= 991) {
              if ($(this).hasClass('active')) {
                  $(this).removeClass('active')
                  $('div.nav-overlay').fadeIn(300);
                  $('.global-nav').addClass('slide-active')
          } else {
                  $(this).addClass('active')
                  $('div.nav-overlay').fadeOut(300);
                  $('.global-nav').removeClass('slide-active')
           }
      }
      
  });


  $('body').on('click', 'div.nav-overlay', function (e) {
     $('div.nav-overlay').fadeOut(300);
     $('nav.global-nav').removeClass('slide-active');
 })


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// $('body').on('click', 'ul.user-list-info li a.notification-btn', function(e) {
//         e.stopPropagation();
//         if (!$('div.notification-pannel').hasClass('nf-showing')) {
//             $('div.notification-pannel').addClass('nf-showing');
//             $('.nav-items').mCustomScrollbar('destroy');
     
//         } else {
//             $('div.notification-pannel').removeClass('nf-showing');
//             $(".nav-items").mCustomScrollbar({
//             axis:"y",
//             theme: "dark-2",
//             // autoExpandScrollbar:true,
//              advanced:{autoExpandHorizontalScroll:true}
// 	     });
//          }
//     });


// $(".nav-items").mCustomScrollbar({
//       axis:"y",
//       theme: "dark-2",
//       // autoExpandScrollbar:true,
//        advanced:{autoExpandHorizontalScroll:true}
// });


//  $("body").click(function(e){
//     console.log('working!')
//     e.stopPropagation();
//     $('div.notification-pannel').removeClass('nf-showing');
// });

$("div.nf-content").click(function(e){
  console.log('working!')
  e.stopPropagation();
});

//  Toggle Fullscreen Start      

let myDocument = document.documentElement;
let btn = document.getElementById("toggle-btn");
btn.addEventListener("click", ()=>{
  if(btn.classList.contains('active')){
      btn.classList.remove('active');
      if (myDocument.requestFullscreen) {
          myDocument.requestFullscreen();
      } 
      else if (myDocument.msRequestFullscreen) {
          myDocument.msRequestFullscreen();
      } 
      else if (myDocument.mozRequestFullScreen) {
          myDocument.mozRequestFullScreen();
      }
      else if(myDocument.webkitRequestFullscreen) {
          myDocument.webkitRequestFullscreen();
      }
      //  btn.textContent = "Exit Fullscreen";
      btn.title = 'Exit Fullscreen';
  }
  else{
      btn.classList.add('active');
      if(document.exitFullscreen) {
          document.exitFullscreen();
      }
      else if(document.msexitFullscreen) {
          document.msexitFullscreen();
      }
      else if(document.mozexitFullscreen) {
          document.mozexitFullscreen();
      }
      else if(document.webkitexitFullscreen) {
          document.webkitexitFullscreen();
      }
      //  btn.textContent = "Go Fullscreen";
      btn.title = 'Toggle Fullscreen';
  }
});


//  Toggle Fullscreen End  

$('body').on('click', 'ul.header-list-info li a.search-btn', function() {
  console.log('Its working yeah!');
  $('nav.global-nav').removeClass('nav-showing');
  $('div.nav-overlay').fadeOut(300);
  if ($('div.search-container').hasClass('showing')) {
      $('div.search-container').removeClass('showing');
      // $('div.search-overlay').fadeOut(400);

  } else {
      $('div.search-container').addClass('showing');
      // $('div.search-overlay').fadeIn(400);
  }
});

$('body').on('click', 'a.cross-btn', function() {
  $('div.search-container').removeClass('showing');
  $('div.search-overlay').fadeOut(400);
})

$("input[name='search']").on('keyup', function() {
  if ($(this).val() != '') {
      $('div.search-list-section').show();
  } else {
      $('div.search-list-section').hide();
  }
});



$("a.item-user").click(function(e){
e.stopPropagation();
  console.log('its working!');
       $(this).parents('ul.header-list-info').find('.flag-dropdown').removeClass('dp-showing');
      e.stopPropagation();
      if ($(this).hasClass('active')) {
          $(this).parents('ul.header-list-info').find('.bm-userprofile').removeClass('dp-showing');
          $(this).removeClass("active");
      } else {
          $(this).addClass("active");
          $(this).parents('ul.header-list-info').find('.bm-userprofile').addClass('dp-showing');
 } 
});

$("a.flag-change-btn").click(function(e){
  e.stopPropagation();
  console.log('its working!');
    $(this).parents('ul.header-list-info').find('.bm-userprofile').removeClass('dp-showing');
     e.stopPropagation();
      if ($(this).hasClass('active')) {
          $(this).parents('ul.header-list-info').find('.flag-dropdown').removeClass('dp-showing');
          $(this).removeClass("active");
      } else {
          $(this).addClass("active");
          $(this).parents('ul.header-list-info').find('.flag-dropdown').addClass('dp-showing');
       } 
});


$("a.notification-btn").click(function(e){
  e.stopPropagation();
  console.log('Working!');
    $(this).parents('ul.header-list-info').find('.flag-dropdownl').removeClass('dp-showing');
    $(this).parents('ul.header-list-info').find('.bm-userprofile').removeClass('dp-showing');
      e.stopPropagation();
      if ($(this).hasClass('active')) {
          $(this).parents('.main').find('.notification-pannel').removeClass('nf-showing');
          $(this).removeClass("active");
      } else {
          $(this).addClass("active");
          $(this).parents('.main').find('.notification-pannel').addClass('nf-showing');
       }  
  });


  $("button.close-pannel").click(function(e){
      e.stopPropagation();
      console.log('Working!');
      $('.notification-pannel').removeClass('nf-showing');
      $('a.notification-btn').removeClass('active');
  });



function dateFilter(){

  $("a.calender-btn").click(function(e){
      console.log('working!');
      $(this).parents('ul.filter-list-info').find('.filter-section').removeClass('f-showing');
      e.stopPropagation();
      if ($(this).hasClass('active')) {
          $(this).parents('ul.filter-list-info').find('.slidefilter-container').removeClass('slide-showing');
          $(this).removeClass("active");
      } else {
          $(this).addClass("active");
          $(this).parents('ul.filter-list-info').find('.slidefilter-container').addClass('slide-showing');
       }
    });

};

dateFilter();


function listFilter(){

$("a.filter-btn").click(function(e){
  $(this).parents('ul.filter-list-info').find('.slidefilter-container').removeClass('slide-showing');
  e.stopPropagation();
  console.log('working!');
      e.stopPropagation();
      if ($(this).hasClass('active')) {
          $(this).parents('ul.filter-list-info').find('.filter-section').removeClass('f-showing');
          $(this).removeClass("active");
      } else {
          $(this).addClass("active");
          $(this).parents('ul.filter-list-info').find('.filter-section').addClass('f-showing');
       } 
  });

}

listFilter();

//  Side Menu   

// $('body').on('click', '.global-nav div.nav-items ul.lst-nav-items3 li a', function (e) {
//   e.stopPropagation();
//   if ($(this).hasClass('active')) {
//       $(this).parent().find('.active').removeClass('active');
//       $(this).parent().find('.mysubnavigation-items').slideUp();

//   } else {
//       $(this).toggleClass("active");
//       $(this).parent().siblings().find('.mysubnavigation-items').slideUp();
//       $(this).parent().siblings().find('a.glnv-dropdown').removeClass('active');
//       $(this).next('.mysubnavigation-items').slideToggle();
//   }
//   });

 
$('body').on('click', '.global-nav div.nav-items ul.lst-nav-items3 li a', function (e) {
  e.stopPropagation();
  if ($(this).hasClass('active')) {
      $(this).parent().find('.active').removeClass('active');
      $(this).parent().find('.mysubnavigation-items').slideUp();
   } else {
      $(this).addClass("active");
      $(this).parent().siblings().find('.mysubnavigation-items').slideUp();

      $(this).parent().siblings().find('a.glnv-dropdown').removeClass('active');
      $(this).parent().siblings().find('a.glnv-dropdown2').removeClass('active');
      $(this).next('.mysubnavigation-items').slideToggle();
  } 
  });

 

 
  //close global navigation
  $('body').on('click', 'nav.global-nav .btn-closenav, div.nav-overlay, ul.lst-nav-items3>li', function (e) {
      e.stopPropagation();
      $('nav.global-nav').removeClass('nav-showing');
      $('div.nav-overlay').fadeOut(300);
      // $('body').css('overflow', 'auto');
  });

  $('body').on('click', 'ul.lst-navigation>li>a', function (e) {
      $('ul.lst-navigation li a').removeClass('item-selected');
      //$( this ).addClass( 'item-selected' );
      });
  // side menu show hide end


  $( 'body').on('click', 'a.hi-btn-menu' , function(e){
      e.stopPropagation();
      $( 'nav.global-nav' ).removeClass( 'nav-showing' );
      $( 'div.ios-nav-overlay' ).fadeOut( 300 );
      $( 'div.nav-overlay' ).fadeOut( 300 );
  })

//  Side Menu  


function dtSample() {
  var tdTblae = $('table#dt-sample').dataTable({
    // select: true,
    dom: "<'row ml-0 mr-0 pt-2 pb-1 '<'col-sm-6 col-md-6 col-12 pt-0'l><'col-sm-6 col-md-6 col-12 pt-1'f>> <'row'<'col-sm-12'tr>><'row ml-0 mr-0 pt-3 pb-0'<'col-sm-12 col-md-5 col-xl-5 col-lg-5' <' exportlinks'> > <'col-sm-12 col-md-7 col-xl-7 col-lg-7 text-right'ip>>",
    select: true,
    responsive: true,

    language: {
      // search: "Search in table:",
      zeroRecords: "No matching records found,<br/>try another search term",
      processing: "Loading...",
      lengthMenu: "Showing _MENU_",
      info: "Showing _START_ to _END_ of <b>_TOTAL_</b> entries",
    }
  });
  $("div.exportlinks").html('<div class="row">' +
    '<div class="col-12 text-align p-0">' +
    '<button class="ux-linkbutton  primary"> <img src="../assets/images/svg/download.svg" alt="download-icon">Download</button>' +
    '<button class="ux-linkbutton  ml-2 primary"> <img src="../assets/images/svg/print.svg" alt="print-icon">Print</button>' +
    '</div> <!--.dt-extras-->');
  // dtsetResponsive();
  $('table#dt-sample').wrap('<div class="restable-box"></div>');
};


dtSample();


$(document).ready( function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

// var themename =  localStorage.getItem("theme");
//      $('html').attr('theme', themename)

//  var themename =  localStorage.getItem("theme");
//      $('html').attr('theme', themename)

});


function showToast(messageText, messageType, autoDismiss, dismissDuration) {
  if (messageText == "Product Service Error") messageText = "";
  if (typeof messageType === "undefined" || messageType === null)
    messageType = 'error';
  if (typeof autoDismiss === "undefined" || autoDismiss === null)
    autoDismiss = true;
  if (typeof dismissDuration === "undefined" || dismissDuration === null)
    dismissDuration = 5000;

  var messageHTML = '<div class="msg-toast msg-' + messageType + '">  <em>' + messageText + '</em> </div>';
  $('body').append('<div class="toast-messages3"></div>');
  $('div.toast-messages3').html(messageHTML);
  setTimeout(function () {
    $('div.toast-messages3').find('.msg-toast').addClass('msg-showing');
  }, 300);
  if (autoDismiss) {
    setTimeout(function () {
      $('div.toast-messages3').find('.msg-toast').removeClass('msg-showing');
    }, dismissDuration);
    setTimeout(function () {
      $('div.toast-messages3').html('');
    }, dismissDuration + 400);
  } else {
    $('div.toast-messages3').find('.msg-toast').addClass('msg-close');
  }
};
  

$('body').on('click', 'div.toast-messages div.msg-toast', function () {
  setTimeout(function () {
    $('div.toast-messages').find('.msg-toast').removeClass('msg-showing');
  }, 300);
});

$(".steps li:nth-of-type(1)").addClass("active");

$(".myContainer .form-container:nth-of-type(1)").addClass("active");




$(".form-container").on("click", ".next", function() {

  $(".steps li").eq($(this).parents(".form-container").index() + 1).addClass("active");

//   $(".steps li").eq($(this).prev().addClass("tick"));

// $(".steps ul").find(".active").addClass("tick");

//$(this).prev().addClass("tick");

//  $('.steps ul ').find('.active').prev().addClass("icon");

 $('.steps ul li span').find('.sp').addClass("icon");




// console.log(as);

// as.findClass('.sp').removeClass('.sp')




  $(this).parents(".form-container").removeClass("active").next().addClass("active flipInX");  

});




$(".form-container").on("click", ".back", function() {  

  $(".steps li").eq($(this).parents(".form-container").index() - totalSteps).removeClass("active");

  $(this).parents(".form-container").removeClass("active flipInX").prev().addClass("active flipInY");

 

// $('.steps ').find('.active').remove().html('<div class="icon"></div>');

});
 
