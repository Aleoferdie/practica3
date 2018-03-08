
var http = require('http');
var path = require('path');
var fs = require('fs');
var form = require('fs').readFileSync('content/contact.html');
var util = require('util');
var querystring = require('querystring');
var maxData = 20 * 1024 * 1024; // 20 MB
var app = require('express');

var mimeTypes = {
				'.js' : 'text/javascript',
				'.html' : 'text/html',
				'.css' : 'text/css',
				'.png': 'image/png',
				'.jpg': 'image/jpg'
				};

var pags = [
			{ruta: '/', output: 'index.html'},
			{ruta: '/index', output: 'index.html'},
			{ruta: '/about', output: 'acerca.html'},
			{ruta: '/products', output: 'productos.html'},
			{ruta: '/webservices', output: 'webserv.html'},
			{ruta: '/contact', output: 'contact.html'},
			{ruta: '/confirm', output: 'confirm.html'}
		   ];				

http.createServer(function(request, response) {

	var ruta = decodeURI(request.url);
	//console.log(ruta);
	var buscar = path.basename(ruta) || 'index.html';

	pags.forEach(function(pag) {

		if (ruta == pag.ruta) {
			buscar = pag.output;
			return;
		}

	});

	var f = 'content/' + buscar;
	//console.log(f);

	fs.exists(f, function(exists) {
		if (exists) {
			fs.readFile(f, function(err, data) {
				if (err) {
					response.writeHead(500);
					response.end('Error del servidor');
					return;
				}
				var headers = {'Content-type': mimeTypes[path.extname(buscar)]};
				response.writeHead(200, headers);
				response.end(data);
				if (request.method === 'POST') {
					var postData = '';
					request.on('data', function(chunk) {
						postData += chunk;
						if (postData.length > maxData) {
							postData = '';
							this.pause();
							response.writeHead(413);
							response.end('El mensaje es demasiado largo');
						}
					}).on('end', function () {
						if (!postData) {
							response.end();
							return;
					}
						var postDataObject = querystring.parse(postData);
						//console.log('Ha escrito:\n' + util.inspect(postDataObject));
						response.end('Ha escrito:\n' + util.inspect(postDataObject))
						});
					return;
				}
			});
			return;
		}
		response.writeHead(404);
		response.end('Pagina no encontrada');
	});

}).listen(8080);

console.log('Servidor escuchando en el puerto 8080');