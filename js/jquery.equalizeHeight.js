/**
* Equalize Height - A jQuery plugin
* Description: This plugin equalizes the heights of elements
* Author: Jessica Tsuji
* Email: jessica.tsuji@gmail.com
*/

(function($) {

	//Create plugin obj
	$.fn.equalizeHeight = function(options) {
		$.fn.equalizeHeight.init($(this));
		return this.each(function(i, element) {
			$(element);
		});
	}
	
	$.fn.equalizeHeight.maxHeight;

	//Instance
	//$.fn.equalizeHeight.instance = function(element, options) {
		//var self = this;
		//this.equalizeHeight;
		
		//Extend the default options obj
		//$.fn.equalizeHeight.options = $.extend({}, self.defaults, options);
		
		//Init (construct) function
	$.fn.equalizeHeight.init = function(element) {
		//Set up default states
		//self.equalizeHeight = element;
		$.fn.equalizeHeight.maxHeight = 0;
		
		$(element).each(function(j, item) {
			var itemHeight = parseInt($(item).outerHeight());
			if (itemHeight > $.fn.equalizeHeight.maxHeight) {
				$.fn.equalizeHeight.maxHeight = itemHeight;
			}
		});
		
		$(element).css('height', $.fn.equalizeHeight.maxHeight);
	}
		
		//Set the instance to the elements data
		//element.data('equalizeHeight', this);
	
	//}
	
})(jQuery);