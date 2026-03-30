
/*-------------------------------------------------------------------------------
  PRE LOADER + IMAGE LOADING HINTS
-------------------------------------------------------------------------------*/

(function ($) {
  function hidePreloader() {
    $('.preloader').fadeOut(400);
  }

  function optimizeImages() {
    $('img').each(function (index, img) {
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      if (!img.hasAttribute('loading') && index > 1) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  $(optimizeImages);

  $('.navbar-collapse a').on('click', function () {
    var $toggle = $('.navbar-toggle');
    if ($toggle.is(':visible')) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    $(window).on('load', hidePreloader);
  }
})(jQuery);
