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

    // Plugins
    hashNav: false,

    onSlideChangeStart: function(swiper) {
      // alert('Hello 1');
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
