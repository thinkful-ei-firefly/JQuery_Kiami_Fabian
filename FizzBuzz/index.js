'use strict'

function getResultFizzBuzz(number){
	if (number % 3 == 0 && number % 5 == 0){
		return "fizzbuzz";
	}else if(number % 3 == 0) {
		return "fizz";
	}else if(number % 5 == 0) {
		return "buzz";
	}else{
		return number;
	}
}

function getHtml(number){
	let fizzResult = getResultFizzBuzz(number);
	if (typeof fizzResult != "number"){
		return '<div class="fizz-buzz-item ' + fizzResult + '">' +
	  '<span>fizz</span>' +
	'</div>';
	}else{
		return '<div class="fizz-buzz-item">' +
	  '<span>' + number + '</span>' +
	'</div>';
	}
	
}

$('#number-chooser').submit(e => {
	e.preventDefault();
	let number = parseInt($('#number-choice').val());
	$('#number-choice').val('');
	let html = '';
	for (let i = 0; i < number; i++){
		html += getHtml(i+1);
	}
	$('.js-results').html(html);
});
