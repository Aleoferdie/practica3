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
	//console.log('Se han recibido los datos...');
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

app.get('/k2-pon2oon', function(request, response) {
	response.render('product',
	{
		modelo: 'K2 Pon2oon',
		precio: '1000€',
		desc: 'Esquís de freeride de K2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie augue in tellus sollicitudin, id consequat enim interdum. Vestibulum gravida quam id massa bibendum dignissim vel vel augue. Maecenas dapibus consequat vehicula.'
	});
});

app.get('/armada-ARV', function(request, response) {
	response.render('product',
	{
		modelo: 'Armada ARV 116',
		precio: '889€',
		desc: 'Esquís de freestyle de Armada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie augue in tellus sollicitudin, id consequat enim interdum. Vestibulum gravida quam id massa bibendum dignissim vel vel augue. Maecenas dapibus consequat vehicula.'
	});
});

app.get('/atomic-redster-s9', function(request, response) {
	response.render('product',
	{
		modelo: 'Atomic Redster S9',
		precio: '850€',
		desc: 'Esquís de competición de Atomic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie augue in tellus sollicitudin, id consequat enim interdum. Vestibulum gravida quam id massa bibendum dignissim vel vel augue. Maecenas dapibus consequat vehicula.'
	});
});

app.get('/webservices?id=1', function(request, response) {
	var bloque = {'Modelo':'K2 Pon2oon','Precio':'1000€','Stock':'Disponible','imagen':'/images/k2pon2oon1.jpg'};
	response.json(bloque);
});

app.get('/webservices?id=2', function(request, response) {
	var bloque = {'Modelo':'Armada ARV 116','Precio':'889€','Stock':'Disponible','imagen':'/images/armada1.jpg'};
	response.json(bloque);
})

app.get('/webservices?id=3', function(request, response) {
	var bloque = {'Modelo':'Atomic Redster S9','Precio':'850€','Stock':'Disponible','imagen':'/images/atomic1.jpg'};
	response.json(bloque);
})

console.log('Servidor escuchando en el puerto 8080');

app.listen(8080);