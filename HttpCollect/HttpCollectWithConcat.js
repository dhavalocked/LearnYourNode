var http = require ('http');
var cs = require ('concat-stream');

var dir = process.argv [2];

	http.get(dir,function (response){
		response.pipe(cs(function (data){

			if (data != null) {
				data = data.toString();

				console.log(data.length);
				console.log(data);
			};


		}));

	});