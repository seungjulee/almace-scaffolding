// Debounce
// http://stackoverflow.com/questions/4298612
function debouncer( func , timeout ) {
   var timeoutID , timeout = timeout || 200;
   return function () {
      var scope = this , args = arguments;
      clearTimeout( timeoutID );
      timeoutID = setTimeout( function () {
          func.apply( scope , Array.prototype.slice.call( args ) );
      } , timeout );
   }
}

// Calculate Swiper height
function calcSwiperHeight(e) {
  // Unset height
  // $('.swiper-container').css("height", "")

  // Calc height
  $('.swiper-container').css("height", $(window).height() + "px")
  $('.swiper-slide').css("height", $(window).height() + "px")

  // Re-init Swiper
  e.reInit()
};

// Swiper
$(function() {
  var mySwiper = $('.swiper-container').swiper({
    mode: 'vertical',
    loop: false,
    // calculateHeight: true,
    cssWidthAndHeight: true,
    watchActiveIndex: true,
    visibilityFullFit: true,

    // Free Mode and Scroll Container
    // freeMode: true,
    // freeModeFluid: true,

    // Touch/mouse interactions
    grabCursor: true,

    // Navigation
    mousewheelControl: true,
    mousewheelControlForceToAxis: true,

    // Pagination
    pagination: '.pagination',
    paginationClickable: true,
    createPagination: true,

    // Plugins Hash Navigation
    // hashNav: true,

    // Plugins Smooth Progress
    progress: true,
    onProgressChange: function(swiper) {
      // Plugin adds "progress" property to each slide and common "progress" property for swiper
      for (var i = 0; i < swiper.slides.length; i++) {
        var slide = swiper.slides[i];
        var slideProgress = slide.progress;
        //Do something depending on slideProgress
      }
      var swiperProgress = swiper.progress
      //Do something with common swiper progress
    },

    onSlideChangeStart: function(swiper) {
      // Remove all "swiper-*" class before append new class
      $("body").removeClass (function(i, css) {
        return (css.match (/(^|\s)swiper-active-\S+/g) || []).join(' ');
      }).addClass("swiper-active-" + (mySwiper.activeIndex + 1));
    },

    onSlideChangeEnd: function(swiper) {
    }
  });

  // Init Swiper height
  calcSwiperHeight(mySwiper);

  // Re-init Swiper height
  $(window).resize(function() {
    calcSwiperHeight(mySwiper);

    // Debug
    // console.log($(window).height() + "px");
  });

  // Get current slide
  // console.log( mySwiper.activeSlide() );
});
