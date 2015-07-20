var ButtonShow = (function(window, $) {
  var options = (function(){
    var $el = $('.js-btn-container'),
        $button = $el.find('.js-btn-show');
    return{
      $el: $el,
      $button: $button
    }
  }());

  function init(){
    addEvents();
  }

  function destroy(){
    removeEvents();
  }

  function addEvents(){
    options.$button.on('click', buttonHandler);
  }

  function removeEvents(){
    options.$button.off('click', buttonHandler);
  }

  function buttonHandler(e){
    var $el = $(this),
        target = $el.data('target');
    e.preventDefault();

    if(target){
      $el.toggleClass('is-active');
      $(target).toggle();
    }

  }

  return {
    init: init,
    destroy: destroy
  }


})(window, jQuery);
