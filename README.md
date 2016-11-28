# Neighborhoods I have visited in Philadelphia

I have compiled some data about the neighborhoods that I've visited in Philadelphia. Use this data to achieve the following tasks: 

* Find the best places to get coffee in neighborhoods that I've lived in.
* Find which neighborhood contains my favorite brunch place.
* Find my favorite places for coffee among all the neighborhoods. Output the names of them in an HTML document using jQuery. If I click on an eatery it should take me to the Yelp entry for that eatery. 
* Choose a neighborhood and output all of the names of my favorite eateries in that neighborhood in an HTML document using jQuery. If I click on an eatery name it should take me to the Yelp entry for that eatery. 

You will be calling methods on the "request" object, so use the following syntax: request.listNeighborhoods();

## Methods

### searchKeyword

Accepts one argument: a string that represents a keyword, for example "coffee" or "brunch". Use this to find all eateries across all neighborhoods with the keyword specified. 

### listNeighborhoods

Accepts no arguments. Will list out the names of all of the neighborhoods.

### listEateries

Accepts one argument: a string that represents a neighborhood name. Use this to list all of my favorite eateries in the specified neighborhood. Case sensitive.

### neighborhoodsLivedIn 

Accepts no arguments. Will list the names of neighborhoods that I've lived in. 
