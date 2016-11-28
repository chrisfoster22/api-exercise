$(document).ready(function() {

	var coffee = request.searchKeyword("coffee");

	for (var i=0; i < coffee.length; i++) {
		var titleDiv = $("<div></div>");
		titleDiv.addClass('listing');
		titleDiv.append('<div>' +coffee[i].eateryName + '</div>');
		$('#content').append(titleDiv);
	}

})