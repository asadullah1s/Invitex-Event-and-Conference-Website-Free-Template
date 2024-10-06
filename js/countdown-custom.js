(function($) {	
	'use strict';
    
    var year = 2024;
    var month = 10;
    var date = 9;
    var time = 0;
    
    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({until: new Date(year, month, date, time)});
    });
})(jQuery);

