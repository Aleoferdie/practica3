$(document).ready(function() {
	$('#k2').find('button').on('click', function() {
		$.get('/webservices?id=1');
	});
});

$(document).ready(function() {
	$('#armada').find('button').on('click', function() {
		$.get('/webservices?id=2');
	});
});

$(document).ready(function() {
	$('#atomic').find('button').on('click', function() {
		$.get('/webservices?id=3');
	});
});