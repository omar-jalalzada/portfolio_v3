$(document).ready(function() {
    $('#fullpage').fullpage({
      
      scrollingSpeed: 300,
      cc3: true,
      easing: 'easeInOutQuart',

      menu: true,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#main_section_nav',
      slidesColor: ['#fff', '#eee', '#ddd', '#ccc', '#bbb'],
      // verticalCentered: true,
      // resize : true,
      slidesNavigation: true,

      // loopHorizontal: false,
      // afterLoad: function(anchorLink, index){
      //     //using index
      //     if(index == '3'){
      //         alert("Section 3 ended loading");
      //     }

      // }

    });
});