$(document).ready(function() {

	var coffee = request.searchKeyword("coffee");

	for (var i=0; i < coffee.length; i++) {
		$('#content').html() += coffee[i].eateryName;
	}

})