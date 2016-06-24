var http = require ('http');
var info = new Array();

var dir = process.argv[2];

http.get(dir,function(response){

	response.setEncoding ("UTF-8");

	response.on ("error",console.error);

	response.on ("data",function (data){
		info.push (data);
	});

	response.on ("end", function (){
		console.log (info.join('').length);
		console.log (info.join(''));

	});

});
