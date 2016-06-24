var net = require('net')  
var strftime = require('strftime')


     var server = net.createServer(function (socket) { 
     	if (socket == null) {
     		console.error(socket)
     	};

      	socket.write (strftime('%Y-%m-%d %H:%M\n',new Date()));
      	socket.end();

     // socket.end(now() +"\n")
     })  
     server.listen(process.argv[2])  

     //   function zeroFill(i) {  
     //   return (i < 10 ? '0' : '') + i  
     // }  
       
     // function now () {  
     //   var d = new Date()  
     //   return d.getFullYear() + '-'  
     //     + zeroFill(d.getMonth() + 1) + '-'  
     //     + zeroFill(d.getDate()) + ' '  
     //     + zeroFill(d.getHours()) + ':'  
     //     + zeroFill(d.getMinutes())  
     // } 