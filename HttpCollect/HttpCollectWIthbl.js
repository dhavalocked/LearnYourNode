var http = require ('http');
var bl = require('bl');

var dir = process.argv[2];

http.get(dir,function (response){
		response.pipe (bl (function (error ,data){
				if (error) 
					return console.error(error);

				data = data.toString();

				console.log (data.length);
				console.log(data);



		}));
});