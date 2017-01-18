/**
* currencyText.js
* ver. 0.0.1
* author Himanshu Tyagi himanshu.thecbuilder@gmail.com
**/

(function( $ ) {
	var settings = {};

	$.fn.currencyText = function(options){	
		settings = $.extend({}, $.fn.currencyText.defaults, options);
		correctSettings();

		return this.each(function(){
			convertToText($(this));
		});
	}

	function correctSettings(){
		if(settings.minimum < 2){
			settings.minimum = 2;
		}
		if(settings.decimal < 0){
			settings.decimal = 0;
		}
	}

	function convertToText($elem){
		var number = parseFloat(getContent($elem));
		var text = "";
		if(!isNaN(number)){
			text = convert(number);
		}
		if(text.length > 0){
			setContent($elem, text);
		}
	}

	function getContent($elem){
		return $elem.is("input, select") ? $elem.val() : $elem.text();			
	}

	function setContent($elem, number){
		$elem.is("input, select") ? $elem.val(number) : $elem.text(number);				
	}

	function convert(number){
		switch(settings.type.toLowerCase()){
			case "indian" :	 
			return convertToIndianNumber(number);
			case "international" : 
			return convertToInternationalNumber(number);
		}
	}

	function convertToInternationalNumber(number){
		var fixed = number.toFixed();
		
		var length = fixed.length;

		//todo
		length -= length%3==0 ? 3 : length%3;
		length = length < 0 ? 0 : length;
		length = length > 6 ? 6 : length;
		
		if(length < settings.minimum){
			return "";
		}
		
		var divisor = "1";
		for(var i=0; i<length; i++) divisor += "0";

		var finalFixed = (fixed / parseFloat(divisor)).toFixed(settings.decimal);
		return finalFixed + " " +internationalTextualValue(length);
	}

	function convertToIndianNumber(number){
		var fixed = number.toFixed();
		
		var length = fixed.length;
		length -= length%2==0 ? 1 : 2;
		length = length < 0 ? 0 : length;
		length = length > 7 ? 7 : length;
		
		if(length < settings.minimum){
			return "";
		}
		
		var divisor = "1";
		for(var i=0; i<length; i++) divisor += "0";

		var finalFixed = (fixed / parseFloat(divisor)).toFixed(settings.decimal);
		return finalFixed+ " " + indianTextualValue(length);
	}

	function internationalTextualValue(size){
		switch (size) {
			case 0: return "";
			case 3: return settings.shortHand ? "K" : "Thousand";
			default: return settings.shortHand ? "M" : "Million";
		}
	}

	function indianTextualValue(size) {
		switch (size) {
			case 0: return "";
			case 3: return settings.shortHand ? "K" : "Thousand";
			case 5: return settings.shortHand ? "L" : "Lakh";
			default: return settings.shortHand ? "Cr." : "Crore";
		}
	}

	$.fn.currencyText.defaults = {
		type: 		"indian",//international,indian
		minimum: 	2,
		shortHand: 	true,
		decimal: 	2
	};
}( jQuery ));
