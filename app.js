var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var fs = require('fs');
var form = require('fs').readFileSync('content/contact.html');
var util = require('util');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var maxData = 20 * 1024 * 1024; // 20 MB
var pug = require('pug');

app.set('view engine', 'pug');

app.use(express.static('content')); // busca contenido en la carpeta especificada

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/content/index.html')); //__dirname obtiene el path actual
});

app.get('/index', function(request, response) {
	response.sendFile(path.join(__dirname + '/content/index.html'));
});

app.get('/about', function(request, response) {
	response.sendFile(path.join(__dirname + '/content/about.html'));
});

app.get('/products', function(request, response) {
	response.sendFile(path.join(__dirname + '/content/products.html'));
});

app.get('/contact', function(request, response) {
	response.sendFile(path.join(__dirname + '/content/contact.html'));
});

app.get('/webservices', function(request, response) {
	response.sendFile(path.join(__dirname + '/content/webserv.html'));
});

app.post('/confirm', parseUrlencoded, function(request, response) {
	var recibidos = request.body;
	console.log('Se han recibido los datos...');
	response.render('confirm',
	{
		nombre: recibidos.nombre,
		apellido1: recibidos.apellido1,
		apellido2: recibidos.apellido2,
		genero: recibidos.genero,
		edad: recibidos.edad,
		email: recibidos.email,
		dir: recibidos.dir,
		num: recibidos.num,
		cp: recibidos.cp,
		mensaje: recibidos.mensaje
	});
});

console.log('Servidor escuchando en el puerto 8080');

app.listen(8080);