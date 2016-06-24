
var fs = require ('fs');
var path = require ('path')

module.exports = function (dir,ext,callback)
{

		 fs.readdir (dir,function (err,list)
		 {

		 	var files = new Array(); 

		 			if (err) {return callback(err)};

		 			list.forEach (function(filename){
		 					if (path.extname(filename) == ("."+ext)) {
		 						files.push (filename)
		 					};

		 			});
	
		 				return callback (null,files)
		 });


}