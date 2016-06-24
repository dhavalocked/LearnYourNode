var http = require ('http');
var fs = require ('fs');


var server = http.createServer(function (request, response)
{
	
	res.writeHead(200, { 'content-type': 'text/plain' })  
	var file =fs.createReadStream(process.argv[3]);

	file.on ('open',function(){
		file.pipe (response);
	})
	file.on('error',function (error){
		response.end(error);
	})

}).listen (process.argv[2]);


 // var http = require('http')  
 //     var fs = require('fs')  
       
 //     var server = http.createServer(function (req, res) {  
 //       res.writeHead(200, { 'content-type': 'text/plain' })  
       
 //       fs.createReadStream(process.argv[3]).pipe(res)  
 //     })  
       
 //     server.listen(Number(process.argv[2]))  
