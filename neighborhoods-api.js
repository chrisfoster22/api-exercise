

var myNeighborhoods = {
	"firstName": "Chris",
	"lastName": "Foster",
	"city": "Philadelphia",
	"neighborhoodsVisited": [
		{
			"neighborhoodName": "Fishtown",
			"haveLivedIn": false,
			"favoriteEateries": [
				{
					"eateryName": "Girard",
					"yelpUrl": "https://www.yelp.com/biz/girard-philadelphia-3",
					"keywords": ["brunch", "french"]
				},
				{
					"eateryName": "La Colombe",
					"yelpUrl": "https://www.yelp.com/biz/la-colombe-coffee-philadelphia",
					"keywords": ["coffee"]
				}
			]
		},
		{
			"neighborhoodName": "Francisville",
			"haveLivedIn": true,
			"favoriteEateries": [
				{
					"eateryName": "Vineyards Cafe",
					"yelpUrl": "https://www.yelp.com/biz/vineyards-cafe-philadelphia",
					"keywords": ["coffee", "breakfast", "crepes", "studying"]
				}
			]
		},
		{
			"neighborhoodName": "Queen Village",
			"haveLivedIn": false,
			"favoriteEateries": [
				{
					"eateryName": "Red Hook Coffee and Tea",
					"yelpUrl": "https://www.yelp.com/biz/red-hook-coffee-and-tea-philadelphia",
					"keywords": ["coffee", "breakfast", "studying"]
				},
				{
					"eateryName": "Shot Tower Coffee",
					"yelpUrl": "https://www.yelp.com/biz/shot-tower-coffee-philadelphia-2",
					"keywords": ["coffee", "studying"]
				}
			]
		},
		{
			"neighborhoodName": "Fairmount",
			"haveLivedIn": true,
			"favoriteEateries": [
				{
					"eateryName": "La Calaca Feliz",
					"yelpUrl": "https://www.yelp.com/biz/la-calaca-feliz-philadelphia",
					"keywords": ["dinner", "mexican"]
				},
				{
					"eateryName": "Rybread",
					"yelpUrl": "https://www.yelp.com/biz/vineyards-cafe-philadelphia",
					"keywords": ["coffee", "breakfast"]
				}
			]
		},
		{
			"neighborhoodName": "Kensington",
			"haveLivedIn": true,
			"favoriteEateries": [
				{
					"eateryName": "Quick Stop",
					"yelpUrl": "https://www.yelp.com/biz/quick-stop-1-philadelphia",
					"keywords": ["cheap"]
				}
			]
		},
		{
			"neighborhoodName": "Rittenhouse",
			"haveLivedIn": false, 
			"favoriteEateries": [
				{
					"eateryName": "Hip City Veg",
					"yelpUrl": "https://www.yelp.com/biz/hipcityveg-philadelphia",
					"keywords": ["lunch", "vegan"]
				},
				{
					"eateryName": "Di Bruno Brothers",
					"yelpUrl": "https://www.yelp.com/biz/di-bruno-bros-philadelphia",
					"keywords": ["lunch"]
				},
				{
					"eateryName": "Metropolitan Bakery",
					"yelpUrl": "https://www.yelp.com/biz/metropolitan-bakery-philadelphia-4?osq=Metropolitan+Bakery",
					"keywords": ["lunch", "coffee", "bread"]
				}
			]
		}
	]
}

var neighborhoods = myNeighborhoods.neighborhoodsVisited;

function allNeighborhoods() {
	return neighborhoods;
}

function listNeighborhoods() {
	var neighborhoodNames = [];
	for (var i=0; i < neighborhoods.length; i++) {
		neighborhoodNames.push(neighborhoods[i].neighborhoodName);
	}
	return neighborhoodNames;
}

function listEateries(neighborhood) {

	for (var i = 0; i < neighborhoods.length; i++) {
		if (neighborhoods[i].neighborhoodName === neighborhood) {
			return neighborhoods[i].favoriteEateries;
		}
	}
}

function neighborhoodsLivedIn() {
	var livedIn = [];


	for (var i = 0; i < neighborhoods.length; i++) {
		if (neighborhoods[i].haveLivedIn === true) {
			livedIn.push(neighborhoods[i].neighborhoodName);
		}
	}
	return livedIn;
}

function keywordSearch(keyword) {
	var eateriesWithKeyword = [];
	for (var i = 0; i < neighborhoods.length; i++) {
		for (var j = 0; j < neighborhoods[i].favoriteEateries.length; j++) {
			for (var k = 0; k < neighborhoods[i].favoriteEateries[j].keywords.length; k++) {
				if (neighborhoods[i].favoriteEateries[j].keywords[k] === keyword) {
					neighborhoods[i].favoriteEateries[j].neighborhood = neighborhoods[i].neighborhoodName;
					eateriesWithKeyword.push(neighborhoods[i].favoriteEateries[j])
				}
			}
		}
	}
	return eateriesWithKeyword;
}



