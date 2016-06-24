var http = require ('http');
var bl = require('./HttpCollect/node_modules/bl');

var results = [];
var count =0;


for (var i = 0 ; i < 3; i++) {
	getHttp(i);
};

function getHttp (index)
{

		http.get(process.argv[2+index],function (response){

			response.pipe (bl(function (err,data){
				if (err) {return console.error(err)};

				data = data.toString();

				results[index]=data;
				count++;

				if (count == 3){
					printResults();
				}

			}));
		});

}

function printResults()
{
	for (var i =0 ; i < results.length; i++) {
		console.log (results[i]);
	};
}