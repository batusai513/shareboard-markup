(function(window, $, ButtonShow){


  $.extend(true, $.magnificPopup.defaults, {
    closeMarkup: '<button title="%title%" class="mfp-close"><span class="mfp-close-icn">&#xe609;</span></button>'
  });

  var popupOptions = {
    type: 'inline',
    mainClass: 'mfp-zoom-in',
    removalDelay: 300
  }

  var panel = {
    init: function(){
      $('.js-panel').magnificPopup($.extend(true, {}, popupOptions, {
        callbacks: {
          open: function(){
            ButtonShow.init();
            ControlClear.init('.js-control-clear');
            $('.database-textarea').scrollbar();
          },
          beforeClose: function(){
            ButtonShow.destroy();
            ControlClear.destroy();
          }
        }
      }));

      $('.js-simple-modal').magnificPopup(popupOptions);
    }
  }

  $(function(){
    panel.init();
  });

})(window, jQuery, ButtonShow);
