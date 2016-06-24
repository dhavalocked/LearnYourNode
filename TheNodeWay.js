var fs = require ('fs');

//fs.readFile(process.argv[2],'UTF-8',callback);

// function callback(error,data){
// 	if(error == null){
// 		console.log(data.toString().split("\n").length-1);
// 	}

fs.readFile(process.argv[2],function(error,data){
	if (error){

	}else{

	console.log(data.toString().split("\n").length-1);
	}
})
