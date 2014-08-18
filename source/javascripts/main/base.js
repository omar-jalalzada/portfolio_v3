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
      loopHorizontal: false,

      // afterLoad: function(anchorLink, index){
      //     //using index
      //     if(index == '3'){
      //         alert("Section 3 ended loading");
      //     }
      // }
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
