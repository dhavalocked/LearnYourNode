
var http = require ('http');

http.get (process.argv[2],myCallback);

function myCallback (response){

response.setEncoding ("utf-8");
	response.on ("error",function (error){
		throw error;
	})
	response.on ("data",function (data){
		console.log(data);

	});


}