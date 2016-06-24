var http = require ('http');
var url = require ('url');

function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }


var server = http.createServer(function (request,response){

	var route = url.parse(request.url,true);
	var result;

	console.log(request.url);

	if (/^\/api\/parsetime/.test(request.url))
        result = parsetime(new Date (route.query.iso))
      else if (/^\/api\/unixtime/.test(request.url))
        result = unixtime(new Date (route.query.iso))



	if (result) {

		response.writeHead(200,{'content-type':'application/json'})
		response.end (JSON.stringify(result));
	}else{
			response.write(404);
			response.end();
	}

});


// var server = http.createServer(function (request,response){

// 	var route = url.parse(request.url,true);

// 	if (route.pathname == 'api/parsetime'){
// 		console.log ('parse request');
// 	}
// 	if (route.pathname == '/api/unixtime'){
// 		console.log ('unixtime');
// 	}

// });

server.listen (process.argv[2])