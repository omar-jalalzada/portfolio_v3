$(document).ready(function() {

  //----------------------------------------
  //////////
  // Turn off mouse scroll
  //////////
  $('body').on({
  'mousewheel': function(e) {
      if (e.target.id == 'el') return;
      e.preventDefault();
      e.stopPropagation();
      }
  })
  //----------------------------------------


  $('#fullpage').fullpage({
    scrollingSpeed: 200,
    cc3: true,
    easing: 'easeInOutQuart',
    resize: false,
    verticalCentered: true,
    menu: '#main_bottom_nav',
    anchors: ['oj_bio','iOS_App_Macys', 'Adaptive_Site_SFMOMA', 'Andriod_App_AFV', 'Branding_Moovweb', 'Arc_Al_Jazeera_Hackathon'],
    loopHorizontal: false,
    continuousVertical: true,
    keyboardScrolling: true,

    
    afterRender: function(){
      //----------------------------------------
      //////////
      // Show nav, if the user comes in not through the homepage
      //////////
      if (window.location.hash.length > 8) {
        $(".nav_numba_twaaa").addClass("show")
      }
      //----------------------------------------
      //----------------------------------------
      //////////
      // add active class to navigation if not on homepage
      // Using lib/hashchange.js
      //////////
      $(window).hashchange( function(){
        $("#main_bottom_nav a").each(function(){
          var c_url = $(this).attr("href")
          if(location.hash == c_url) {
            $(this).addClass("anchor_active")
            // console.log(c_url)
          } else {
            $(this).removeClass("anchor_active")
          }
        });
        console.log("hashchageLenght=" + location.hash.length, "hashchageName=" + location.hash)
        if (location.hash.length > 8) {
          $(".nav_numba_twaaa").addClass("show")
        } else {
          $(".nav_numba_twaaa").removeClass("show")
        }
      });
      //----------------------------------------


      //----------------------------------------
      //////////
      // adding the hover interaction for the phone displays 
      //////////
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
      //----------------------------------------


   
      //----------------------------------------
      //////////
      // Show arrow key guid on the bio slide
      //////////
      setTimeout(function(){
        $(".arrow_keys_container").addClass("show")  
      }, 4000);




      //----------------------------------------
      //////////
      // Highlighting the arrow keys on press
      //////////
      function do_it(arrow_div) {
        var selecta = ".arrow_keys_container " + arrow_div
        // console.log(selecta)
        $(selecta).addClass("pressed")
        setTimeout(function(){
          $(selecta).removeClass("pressed")
        }, 200)
      };

      $(window).keydown(function(e) {
        key = e.keyCode
        switch(key) {
          case 38:
            do_it(".a_1")
          break;
          case 37:
            do_it(".a_2")
          break;
          case 39:
            do_it(".a_4")
          break;
          case 40:
            do_it(".a_3")
          break;
        }
      });
      //----------------------------------------





    } // After render end
  }); // Fullpage function end



  //----------------------------------------
  //////////
  // Fancy Box Slideswhow
  //////////
  $(".fancybox-thumb").fancybox({
    // prevEffect  : 'none',
    // nextEffect  : 'none',
    openSpeed: 100,
    closeSpeed: 10,
    nextSpeed: 200,
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
  //----------------------------------------

});





//
// arrow key guide
//
// if(!readCookie("schmoney_in_my_pocket")) {
//   console.log("stay based.")
//   $(function() {
//     // setTimeout(function(){
//     //   $(".arrow_keys_container").addClass("show")  
//     // }, 4000);
    
//     // $(".arrow_keys_container").addClass("show").delay(5000).queue(function(next){
//     //     // $(this).addClass("hide");
//     //     $(this).delay(200).queue(function(next){
//     //       // $(this).remove();
//     //     });
//     //     next();
//     // });
//     // createCookie("schmoney_in_my_pocket","cause_im_lit", 1);
//   });
// }

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


// afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
//   if(index == 1){
//     alert("hi");

//     // $(window).keypress(function( event ) {
//     //   if ( event.which == 39 ) {
//     //     // event.preventDefault();
//     //     // alert("oh hay boy" + index)
//     //   }
//     //   // xTriggered++;
//     //   // var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
//     //   // $.print( msg, "html" );
//     //   // $.print( event );
//     // });
//     // $(window).keydown(function(e) {

//     //   key = e.keyCode
//     //   if (key == 39) {
//     //     alert("oh hay boy" + index)
//     //     $.fn.fullpage.moveTo(index + 1, 0);
//     //   }
//     // });
//   }
//   if(index == 2 && slideIndex == 0){
//     alert("yo oma")
//   }
// },

//   //second slide of the second section (supposing #secondSlide is the
//   //anchor for the second slide
//   if(index == 2 && slideIndex == 'secondSlide'){
//       alert("Second slide loaded");
//   }
// }