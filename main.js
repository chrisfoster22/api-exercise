$(document).ready(function() {

	var coffee = request.searchKeyword("coffee");

	$.each(coffee, function(index, coffeeShop) {
		var titleDiv = $("<div></div>");
		titleDiv.addClass('listing');
		titleDiv.append('<div>' +coffeeShop.eateryName + '</div>');
		$('#content').append(titleDiv);
	});

})