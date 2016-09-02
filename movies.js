var movies = [
	{	
		"title": "Atonement",
		"gregSeen": true,
		"saraSeen": false
	},
	{
		"title": "Logan's Run",
		"gregSeen": false,
		"saraSeen": false	
	},
	{	
		"title": "The Theory of Everything",
		"gregSeen": false,
		"saraSeen": true
	},
	{	
		"title": "Son of Saul",
		"gregSeen": false,
		"saraSeen": false
	},
	{	
		"title": "Spotlight",
		"gregSeen": true,
		"saraSeen": false
	},
	{	
		"title": "Whiplash",
		"gregSeen": true,
		"saraSeen": false
	},
	{	
		"title": "Gravity",
		"gregSeen": true,
		"saraSeen": false
	},
	{	
		"title": "Crouching Tiger Hidden Dragon",
		"gregSeen": true,
		"saraSeen": false
	},
	{	
		"title": "Inside Llewyn Davis",
		"gregSeen": true,
		"saraSeen": false
	},
	{	
		"title": "Star Wars",
		"gregSeen": true,
		"saraSeen": true
	},
	{	
		"title": "Embrace the Serpent",
		"gregSeen": false,
		"saraSeen": false
	},
	{	
		"title": "Neon Demon",
		"gregSeen": false,
		"saraSeen": false
	},
	{	
		"title": "Nice Guys",
		"gregSeen": false,
		"saraSeen": false
	},
	{	
		"title": "The Lobster",
		"gregSeen": false,
		"saraSeen": false
	},
	{	
		"title": "Allegiant",
		"gregSeen": false,
		"saraSeen": false
	},
	{	
		"title": "Finding Dory",
		"gregSeen": false,
		"saraSeen": false
	},
	{
		"title": "Lord of the Rings, The Return of the King",
		"gregSeen": true,
		"saraSeen": false
	},
	{
		"title": "Wilder People",
		"gregSeen": false,
		"saraSeen": false
	}
];

function returnAll(){
	var allArray = [];
	//Iterate through the movies push them to allArray
	for (var i = 0; i < movies.length; i += 1){
		allArray.push(movies[i].title);
	};
	
	allArray.sort()
	var html = '<p>';
	
	for (var i=0; i<allArray.length; i++){
		html += allArray[i] + '<br>';
	};
	html += '</p>'
	//console.log(html);
	return html;
};


function returnGreg(){
	var gregArray = [];
	for (var i = 0; i < movies.length; i++){
		if (movies[i].gregSeen == false){
			gregArray.push(movies[i].title);
		};
	};

	gregArray.sort();
	var html = '<p>';

	for (var i = 0; i<gregArray.length; i++){
		html += gregArray[i] + '<br>';
	};
	html += '</p>'
	return html;
};

function returnSara(){
	var saraArray = [];
	for (var i = 0; i < movies.length; i++){
		if (movies[i].saraSeen == false){
			saraArray.push(movies[i].title);
		};
	};

	saraArray.sort();
	var html = '<p>';

	for (var i = 0; i<saraArray.length; i++){
		html += saraArray[i] + '<br>';
	};
	html += '</p>'
	return html;
};

function returnNeither(){
	var neitherArray = [];
	for (var i = 0; i < movies.length; i++){
		if (movies[i].saraSeen == false && movies[i].gregSeen == false){
			neitherArray.push(movies[i].title);
		};
	};

	console.log(neitherArray);

	neitherArray.sort();
	var html = '<p>';

	for (var i = 0; i<neitherArray.length; i++){
		html += neitherArray[i] + '<br>';
	};
	html += '</p>'
	return html;
};


// function return_list(a_list) {
// 	var text = "<p>"
// 	a_list.sort()
// 	for(var i = 0; i < a_list.length; i++){
// 		text += a_list[i] + "<br>"
// 	}
// 	text += "</p>"
// 	return text
// }


$("#all").click(function(){
	var display = document.getElementById('display');
	display.innerHTML = "<h2>ALL MOVIES:</h2><br>" + returnAll();
});

$("#greg").click(function(){
	var display = document.getElementById('display');
	display.innerHTML = "<h2>GREG HASN'T SEEN:</h2><br>" + returnGreg();
});

$("#sara").click(function(){
	var display = document.getElementById('display');
	display.innerHTML = "<h2>SARA HASN'T SEEN:</h2><br>" + returnSara();
});

$("#neither").click(function(){
	var display = document.getElementById('display');
	display.innerHTML = "<h2>NEITHER OF US HAS SEEN:</h2><br>" + returnNeither();
});




// for(var i=0; i<movies.length; i++){
// 	console.log(movies[i].gregSeen);	
// }




