var http = require ('http');
var map  = require('through2-map');


var server = http.createServer(function (req, res){

		if (req.method != 'POST') {
			return res.end ('Post please');
		};

		req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase(); 
     })).pipe(res)  
}).listen (process.argv[2]);

