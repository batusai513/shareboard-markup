(function(window, $, ButtonShow){


  $.extend(true, $.magnificPopup.defaults, {
    closeMarkup: '<button title="%title%" class="mfp-close"><span class="mfp-close-icn">&#xe609;</span></button>'
  });

  var panel = {
    init: function(){
      $('.js-panel').magnificPopup({
        type: 'inline',
        callbacks: {
          open: function(){
            ButtonShow.init();
          },
          beforeClose: function(){
            ButtonShow.destroy();
          }
        }
      });
    }
  }

  $(function(){
    panel.init();
  });

})(window, jQuery, ButtonShow);
