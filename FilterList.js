var fs = require('fs');
var path = require('path');

var ext = '.'+process.argv[3];

fs.readdir(process.argv[2],function(error,list){
		if (error) {throw error};

		// list.forEach(function(fileName){
		// 	var extension = path.extname(fileName);

		// 	if (ext == extension) {

		// 	console.log(fileName);	
		// }
		// })
list.forEach(function (fileName){

	var extension =  path.extname(fileName);

	if (extension == ("."+process.argv[3])) {
		console.log(fileName)
	};

});

});

