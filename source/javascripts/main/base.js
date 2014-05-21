$(document).ready(function() {
    $('#fullpage').fullpage({
      scrollingSpeed: 200,
      menu: true,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#main_section_nav',
      // navigation: true,
      slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#d2ffe3'],
      verticalCentered: true,
      resize : true,
      slidesNavigation: true,
    });
});
