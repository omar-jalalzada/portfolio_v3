$(document).ready(function() {



    $('#fullpage').fullpage({
      scrollingSpeed: 200,
      cc3: true,
      easing: 'easeInOutQuart',

      menu: true,
      menu: '#main_section_nav',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      
      // slidesColor: ['#fff', '#eee', '#ddd', '#ccc', '#bbb'],
      slidesNavigation: true,
      navigationTooltips: ['firstSlide', 'secondSlide'],

      // verticalCentered: true,
      // resize : true,
      // loopHorizontal: false,

      // afterLoad: function(anchorLink, index){
      //     //using index
      //     if(index == '3'){
      //         alert("Section 3 ended loading");
      //     }
      // }

      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){

        //first slide of the second section
        if(index == '2' && slideIndex == 3){


          


        }

        //second slide of the second section (supposing #secondSlide is the
        //anchor for the second slide
        if(index == 2 && slideIndex == 'secondSlide'){
            alert("Second slide loaded");
        }
      }


    });

   // adding the hover interaction for the phone displayes 
  $(".hover_container").hover(
    function () {
      $(this).find('.hover').addClass("active");
    },
    function () {
      $(this).find('.hover').removeClass("active"); 
    }
  );


  //
  // $('.fancybox').fancybox();

  $(".fancybox-thumb").fancybox({
    // prevEffect  : 'none',
    // nextEffect  : 'none',
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });


});

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

// arrow key guide
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
