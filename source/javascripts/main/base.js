$(document).ready(function() {


    $('#fullpage').fullpage({
      scrollingSpeed: 200,
      cc3: true,
      easing: 'easeInOutQuart',
      resize: false,

      menu: true,
      menu: '#main_section_nav',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      
      slidesNavigation: true,
      navigationTooltips: ['firstSlide', 'secondSlide'],

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
  $(".hover_container").hover(
    function () {
      $(this).find('.hover').addClass("active");
    },
    function () {
      $(this).find('.hover').removeClass("active"); 
    }
  );



  //
  // Fancy Box Slideswho
  //
  $(".fancybox-thumb").fancybox({
    // prevEffect  : 'none',
    // nextEffect  : 'none',
    openSpeed: 100,
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

});


//
// arrow key guide
//
if(!readCookie("schmoney_in_my_pocket")) {
  console.log("stay based.")
  $(function() {
    $(".arrow_keys_container").addClass("show").delay(5000).queue(function(next){
        $(this).addClass("hide");
        $(this).delay(200).queue(function(next){
          $(this).remove();
        });
        next();
    });
    createCookie("schmoney_in_my_pocket","cause_im_lit", 1);
  });
}


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

