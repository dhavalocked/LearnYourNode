var fs = require('fs')
var path = require('path')

module.exports = function filter(directory,ext,callback)
{

	//fs.readdir (directory, function(err,data){
	fs.readdir(directory,function(error,data){
		
		var files= new Array();
		if (error) {return callback (error)};

		data.forEach(function(filename){
			if (path.extname(filename)== ("."+ext)) {
				files.push(filename);
			};
		});

return callback (null,files);

	});
}