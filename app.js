

	// Se crea el servidor Node

var http = require('http');

http.createServer(function(request, response) {

	console.log('Petición http');
	response.writeHead(200, {'content-type': 'text-plain'});
	response.end('Mi primer servidor node');

}).listen(8080);

console.log('Servidor escuchando en el puerto 8080');