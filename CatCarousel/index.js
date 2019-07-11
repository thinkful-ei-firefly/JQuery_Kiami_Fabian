'use strict'

<<<<<<< HEAD
$('.thumbnail').on('click', function() {
  var src= ($(this).attr('src')==='img')
=======
$('.thumbnail').on('click', e => {
	$('.hero img').attr('src', e.target.src);
	$('.hero img').attr('alt', e.target.alt);
>>>>>>> 98bcd2d93a2c85bb0d65559aeb0aa1a3be55c681
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

