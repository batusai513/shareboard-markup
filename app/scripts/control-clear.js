'use strict';

var ControlClear = (function clear(window, $){
	var $el = $.noop();

	function init(el){
		$el = $(el);
		addEvents();
	}

	function destroy(){
		$el.off('click.formclear', clickHandler)
	}

	function clickHandler(e){
        var $el = $(e.currentTarget);
        $el.parent('.form-group').find('input').val('').focus();
	}

	function addEvents(){
      $el.on('click.formclear', clickHandler);
	}

	return{
		init: init,
		destroy: destroy
	}
}(window, jQuery));