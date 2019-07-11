'use strict'

function getHttp(object){
	return '<li>' +
		'<span class="shopping-item">' + object + '</span>' +
	        '<div class="shopping-item-controls">' +
	          '<button class="shopping-item-toggle">' +
	            '<span class="button-label">check</span>' +
	          '</button>' +
	          '<button class="shopping-item-delete">' +
	            '<span class="button-label">delete</span>' +
	          '</button>' +
	        '</div>' +
		'</li>';
}

function createCalls(){
	$('#js-shopping-list-form').on('submit', e => {
		e.preventDefault();
		$('.shopping-list').append(getHttp($('#shopping-list-entry').val()));
		$('#shopping-list-entry').val('');
	});
	$('#js-shopping-list-form').on('keyup', e => {
		if(e.keyCode == 13){
			$('.shopping-list').append(getHttp($('#shopping-list-entry').val()));
			$('#shopping-list-entry').val('');
		}
	});

	$('li .shopping-item-controls .shopping-item-toggle').on('click', e => {
		$(e.target).parent().parent().parent().find('.shopping-item').addClass('shopping-item__checked');
		//e.preventDefault();
		//$(e.target).parent().addClass('shopping-item__checked');
		console.log($(e.target).parent().parent().parent().find('.shopping-item'));
		//e.target
		//$('.shopping-list').append(getHttp($('#shopping-list-entry').val()));
	});

	function deleteItems() {
		$('li').on('click', '.delete-label', function() {
			const itemDel = $(event.target).closest('li');
		itemDel.remove();
		)}
	};
}

function createCalls(){
	deleteItems();
}

$(createCalls);
