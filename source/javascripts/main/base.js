$(document).ready(function() {
    $('#fullpage').fullpage({
      
      scrollingSpeed: 300,
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
});


$(".hover_container").hover(
  function () {
    $(this).find('.hover').addClass("active");
  },
  function () {
    $(this).find('.hover').removeClass("active"); 
  }
);