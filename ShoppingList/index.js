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

function addItems(){
	$('#js-shopping-list-form').on('submit', e => {
		e.preventDefault();
		const inputValue = $('#shopping-list-entry').val();
		if (inputValue && inputValue!==''){
			$('.shopping-list').append(getHttp(inputValue));
			$('#shopping-list-entry').val('');
		}
	});
}

function checkItems(){
	$('.shopping-list').on('click', '.shopping-item-toggle', e => {
		const title = $(e.target).closest('li').find('.shopping-item');
		if (title.hasClass('shopping-item__checked')){
			title.removeClass('shopping-item__checked')
			$(e.target).text('check');
		}
		else{
			title.addClass('shopping-item__checked');
			$(e.target).text('uncheck');
		} 
	});
}

function deleteItems() {
	$('.shopping-list').on('click', '.shopping-item-delete', function() {
		const itemDel = $(event.target).closest('li');
		itemDel.remove();
	});
};


$(addItems);
$(checkItems);
$(deleteItems);
