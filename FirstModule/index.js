var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require ('./FilterListeModule.JS');


function showList(error,data){
	if (error) {console.log (error)};

	console.log(data.join("\n"));
}

mymodule(dir,ext,showList);