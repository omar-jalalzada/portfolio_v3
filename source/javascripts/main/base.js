$(document).ready(function() {


    $('#fullpage').fullpage({
      scrollingSpeed: 200,
      cc3: true,
      easing: 'easeInOutQuart',
      resize: false,

      // menu: true,
      menu: '#main_bottom_nav',
      anchors: ['oj_bio','iOS_App_Macys', 'Adaptive_Site_SFMOMA', 'Andriod_App_AFV', 'Branding_Moovweb', 'Arc_Al_Jazeera_Hackathon'],
      autoScrolling: true,
      loopHorizontal: false,
      // continuousVertical: true,
      keyboardScrolling: true,
      // paddingBottom: '10px',
      // slidesNavigation: true,

      // navigationTooltips: ['firstSlide', 'secondSlide'],
      // slidesNavigation: true,
      // slidesNavPosition: 'bottom',

      // slidesColor: ['#fff', '#eee', '#ddd', '#ccc', '#bbb'],
      // verticalCentered: true,
      // loopHorizontal: false,

      // afterLoad: function(anchorLink, index){
      //     //using index
      //     if(index == '3'){
      //         alert("Section 3 ended loading");
      //     }
      // }

      // afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){

      //   //first slide of the second section
      //   if(index == '2' && slideIndex == 3){

      //   }

      //   //second slide of the second section (supposing #secondSlide is the
      //   //anchor for the second slide
      //   if(index == 2 && slideIndex == 'secondSlide'){
      //       alert("Second slide loaded");
      //   }
      // }
    });



  //
  // adding the hover interaction for the phone displays 
  //
  // $(".hover_container").hover(
  //   function () {
  //     $(this).find('.hover').addClass("active");
  //   },
  //   function () {
  //     $(this).find('.hover').removeClass("active"); 
  //   }
  // );
  $(".phone_mockups_4_in_a_row li.contains_more_text").click(
    function(){
      $(this).toggleClass("show")
  });

  // setTimeout(
  //   function() {
  //     $(".non_slide_pages .content_holder").addClass("active")
  // }, 500);

  //
  // Fancy Box Slideswho
  //
  $(".fancybox-thumb").fancybox({
    // prevEffect  : 'none',
    // nextEffect  : 'none',
    openSpeed: 100,
    closeSpeed: 10,
    nextSpeed: 100,
    scrollOutside: true,
    beforeLoad: function() {
      $.fn.fullpage.setKeyboardScrolling(false);
    },
    afterClose: function() {
      $.fn.fullpage.setKeyboardScrolling(true);
    },
    helpers : {
      title : {
        type: 'outside',
        position: 'bottom'

      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });
  





  // window.location.pathname

  $(window).hashchange( function(){
  // Alerts every time the hash changes!
    // alert( location.hash );
    $("#main_bottom_nav a").each(function(){
      var c_url = $(this).attr("href")
      
      if(location.hash == c_url) {
        $(this).addClass("active")
        console.log(c_url)
      } else {
        $(this).removeClass("active")
      }
    });


    if (location.hash == "#oj_bio") {
      $("body").addClass("hide_nav")
    } else {
      $("body").removeClass("hide_nav")
    };


  });





});





// $("#main_bottom_nav .slide_link_containers a").eac

// //
// arrow key guide
//
// if(!readCookie("schmoney_in_my_pocket")) {
//   console.log("stay based.")
//   $(function() {
//     $(".arrow_keys_container").addClass("show").delay(5000).queue(function(next){
//         // $(this).addClass("hide");
//         $(this).delay(200).queue(function(next){
//           // $(this).remove();
//         });
//         next();
//     });
//     // createCookie("schmoney_in_my_pocket","cause_im_lit", 1);
//   });
// }

// function do_it(arrow_div) {
//   var selecta = ".arrow_keys_container " + arrow_div
//   console.log(selecta)
//   $(selecta).addClass("pressed")
//   setTimeout(function(){
//     $(selecta).removeClass("pressed")
//   }, 200)
// };

// $(window).keydown(function(e) {
//   key = e.keyCode
//   switch(key) {
//     case 38:
//       do_it(".a_1")
//     break;
//     case 37:
//       do_it(".a_2")
//     break;
//     case 39:
//       do_it(".a_4")
//     break;
//     case 40:
//       do_it(".a_3")
//     break;
//   }
// });

// // var xTriggered = 0;
// $( ".arrow_keys_container" ).keydown(function( event ) {
//   if ( event.which == 38 ) {
//    event.preventDefault();
//    alert("hi")
//   }
//   // xTriggered++;
//   // var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
//   // $.print( msg, "html" );
//   // $.print( event );
// });

// $(function(){
//   $('#sfmoma_intro_video').okvideo({ source: '9bZkp7q19f0', 
//     // volume: , 
//     loop: true,
//     hd:true, 
//     adproof: true,
//     annotations: false,
//     onFinished: function() { console.log('finished') },
//     unstarted: function() { console.log('unstarted') },
//     onReady: function() { console.log('onready') },
//     onPlay: function() { console.log('onplay') },
//     onPause: function() { console.log('pause') },
//     buffering: function() { console.log('buffering') },
//     cued: function() { console.log('cued') },
//   });
// });