'use strict'

$('.thumbnail').on('click', e => {
	$('.hero img').attr('src', e.target.src);
	$('.hero img').attr('alt', e.target.alt);
});

/*$('.thumbnail').on('focus', e => {
	//console.log(e.target);
	$('.hero img').attr('src', e.target.children[0].src);
	$('.hero img').attr('alt', e.target.children[0].alt);
});*/

$('.thumbnail').on('keyup', e => {
   if(e.keyCode == 13)
    {
        $('.hero img').attr('src', e.target.children[0].src);
		$('.hero img').attr('alt', e.target.children[0].alt);
    }
});

