(function ($) {
  /*------------------------------------------------------------------------------
      animation
    ------------------------------------------------------------------------------*/

  // scroll effects
  $.fn.acs = function (options) {
    let elements = this;
    let defaultsHeight = screen.height + screen.height/5;
    let defaults = {
      screenPos: 0.9,
      className: "is-animated",
    };
    let setting = $.extend(defaults, options);

    $(window).on("load scroll", function () {
      add_class_in_scrolling();
    });

    function add_class_in_scrolling() {
      let winScroll = $(window).scrollTop();
      let scrollPos = winScroll + defaultsHeight * setting.screenPos;

      if (elements.offset().top < scrollPos) {
        elements.addClass(setting.className);
      }
    }
  };

  $('.anm, [class*="anm-"], .anm-list-fast > *,  .anm-list > *').each(function () {
    $(this).acs();
  });

  // list animation delay
  $.fn.anmDelay = function (options) {
    let elements = this;
    let defaults = {
      delay: 0.2,
      property: "animation-delay",
    };
    let setting = $.extend(defaults, options);

    let index = elements.index();
    let time = index * setting.delay;
    elements.css(setting.property, time + "s");
  };

  $(".anm-list > *").each(function () {
    $(this).anmDelay();
  });

  // list animation delay
  $.fn.listDelay = function (options) {
    let elements = this;
    let defaults = {
      delay: 0.1,
      property: "animation-delay",
    };
    let setting = $.extend(defaults, options);

    let index = elements.index();
    let time = index * setting.delay;
    elements.css(setting.property, time + "s");
  };

  $(".anm-list-fast > *").each(function () {
    $(this).listDelay();
  });

})(jQuery);
