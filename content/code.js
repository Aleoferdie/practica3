jQuery(document).ready(function(){
	$('#img1').on('click',function() {
		$('#contenido').attr('data-tipo','1');
		$('#contenido').attr('data-precio','1000');
		$("#titulo").html('<h1>K2 Pon2oon</h1>');
		$('.pest').show();
		$('.precios').hide();
		$('#visor').hide();
		$('#info').empty();
	});
});
jQuery(document).ready(function(){
	$('#img2').on('click',function() {
		$('#contenido').attr('data-tipo','2');
		$('#contenido').attr('data-precio','899');
		$('#titulo').html('<h1>Armada ARV 116</h1>');
		$('.pest').show();
		$('#visor').hide();
		$('.precios').hide();
		$('#info').empty();
	});
});
jQuery(document).ready(function(){
	$('#img3').on('click',function() {
		$('#contenido').attr('data-tipo','3');
		$('#contenido').attr('data-precio','799');
		$('#titulo').html('<h1>Atomic Redster  S9</h1>');
		$('.pest').show();
		$('#visor').hide();
		$('.precios').hide();
		$('#info').empty();
	});
});
jQuery(document).ready(function(){
	$('#btn1').on('click',function() {
		$('.precios').hide();

$('#info').hide();		var tipo = $('#contenido').attr('data-tipo');
		if (tipo==1){
			$('#1').attr('src','images/pon2oon1.jpg');
			$('#2').attr('src','images/pon2oon1.jpg');
			$('#3').attr('src','images/pon2oon2.jpg');
			$('#4').attr('src','images/pon2oon3.jpg');
		}else if (tipo==2){
			$('#1').attr('src','images/armada1.jpg');
			$('#2').attr('src','images/armada1.jpg');
			$('#3').attr('src','images/armada2.jpg');
			$('#4').attr('src','images/armada3.jpg');
		}else{
			$('#1').attr('src','images/atomic1.jpg');
			$('#2').attr('src','images/atomic1.jpg');
			$('#3').attr('src','images/atomic2.jpg');
			$('#4').attr('src','images/atomic3.jpg');
		}
		$('#visor').show();
	});
});
jQuery(document).ready(function(){
	$('#btn2').on('click',function() {
		$('.precios').hide();
		$('#visor').hide();

$('#info').show();		var tipo = $('#contenido').attr('data-tipo');
		if (tipo=='1'){
			$('#info').html('<br><p>Descripcion <b>K2 Pon2oon</b></p><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis quis sem mollis condimentum. Cras non leo eu dolor pellentesque aliquet. Nullam vitae congue lacus. Donec fringilla lacinia feugiat. Nullam blandit metus sit amet eros pellentesque hendrerit. Mauris at consequat arcu. Suspendisse potenti. Duis a condimentum dui. Sed pellentesque, lectus nec lobortis tempus, neque tellus ultrices nisl, eu sodales turpis neque eget purus. Nulla tempus tortor ut libero maximus, at porttitor dui sollicitudin. Proin hendrerit orci nec tortor fringilla, a vehicula velit fringilla. Vivamus tempus rutrum sapien, ut tempus orci viverra vitae. Nullam aliquam eros quis pulvinar convallis. Phasellus rhoncus, tellus vitae interdum sagittis, urna sapien hendrerit libero, in lacinia purus eros nec tellus. Integer in augue pretium turpis tincidunt tempus ac a nisl. ');
		}else if (tipo=='2'){
			$('#info').html('<br><p>Descripcion <b>Armada ARV 116</b></p><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis quis sem mollis condimentum. Cras non leo eu dolor pellentesque aliquet. Nullam vitae congue lacus. Donec fringilla lacinia feugiat. Nullam blandit metus sit amet eros pellentesque hendrerit. Mauris at consequat arcu. Suspendisse potenti. Duis a condimentum dui. Sed pellentesque, lectus nec lobortis tempus, neque tellus ultrices nisl, eu sodales turpis neque eget purus. Nulla tempus tortor ut libero maximus, at porttitor dui sollicitudin. Proin hendrerit orci nec tortor fringilla, a vehicula velit fringilla. Vivamus tempus rutrum sapien, ut tempus orci viverra vitae. Nullam aliquam eros quis pulvinar convallis. Phasellus rhoncus, tellus vitae interdum sagittis, urna sapien hendrerit libero, in lacinia purus eros nec tellus. Integer in augue pretium turpis tincidunt tempus ac a nisl. ');
		}else{
			$('#info').html('<br><p>Descripcion <b>Atomic Redster  S9</b></p><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis quis sem mollis condimentum. Cras non leo eu dolor pellentesque aliquet. Nullam vitae congue lacus. Donec fringilla lacinia feugiat. Nullam blandit metus sit amet eros pellentesque hendrerit. Mauris at consequat arcu. Suspendisse potenti. Duis a condimentum dui. Sed pellentesque, lectus nec lobortis tempus, neque tellus ultrices nisl, eu sodales turpis neque eget purus. Nulla tempus tortor ut libero maximus, at porttitor dui sollicitudin. Proin hendrerit orci nec tortor fringilla, a vehicula velit fringilla. Vivamus tempus rutrum sapien, ut tempus orci viverra vitae. Nullam aliquam eros quis pulvinar convallis. Phasellus rhoncus, tellus vitae interdum sagittis, urna sapien hendrerit libero, in lacinia purus eros nec tellus. Integer in augue pretium turpis tincidunt tempus ac a nisl. ');
		}
	});
});
jQuery(document).ready(function(){
	$('#btn3').on('click',function() {
		$('.precios').hide();
		$('#visor').hide();$('#info').hide();
		var tipo = $('#contenido').attr('data-tipo');
		if (tipo=='1'){
			var value = parseInt($('#cant1').text());
			$('#precio1').show();
		}else if (tipo=='2'){
			var value = parseInt($('#cant2').text());
			$('#precio2').show();
		}else{
			var value = parseInt($('#cant3').text());
			$('#precio3').show();
		}
	});
});
jQuery(document).ready(function(){
	$('.f').change(function() {
		var tipo = $('#contenido').attr('data-tipo');
		if (tipo=='1'){
			$('#cant1').text($('#c1').val());
			var subt1 = parseInt($('#c1').val()) * parseInt($('#contenido').attr('data-precio'));
			$('#subtotal1').html(subt1);
			var tot = subt1 + parseInt($('#subtotal2').text()) + parseInt($('#subtotal3').text());
			$('#total').html(tot);
		}else if (tipo=='2'){
			$('#cant2').text($('#c2').val());
			var subt2 = parseInt($('#c2').val()) * parseInt($('#contenido').attr('data-precio'));
			$('#subtotal2').html(subt2);
			var tot = subt2 + parseInt($('#subtotal1').text()) + parseInt($('#subtotal3').text());
			$('#total').html(tot);
		}else{
			$('#cant3').text($('#c3').val());
			var subt3 = parseInt($('#c3').val()) * parseInt($('#contenido').attr('data-precio'));
			$('#subtotal3').html(subt3);
			var tot = subt3 + parseInt($('#subtotal1').text()) + parseInt($('#subtotal2').text());
			$('#total').html(tot);
		}
	});
});
jQuery(document).ready(function(){
	$('#2').on('click',function() {
		var tipo = $('#contenido').attr('data-tipo');
		if (tipo==1){
			$('#1').attr('src','images/pon2oon1.jpg');
		}else if (tipo==2){
			$('#1').attr('src','images/armada1.jpg');
		}else{
			$('#1').attr('src','images/atomic1.jpg');
		}
		$('.i').hide();
	});
});
jQuery(document).ready(function(){
	$('#3').on('click',function() {
		var tipo = $('#contenido').attr('data-tipo');
		if (tipo==1){
			$('#1').attr('src','images/pon2oon2.jpg');
		}else if (tipo==2){
			$('#1').attr('src','images/armada2.jpg');
		}else{
			$('#1').attr('src','images/atomic2.jpg');
		}
		$('.i').hide();
	});
});
jQuery(document).ready(function(){
	$('#4').on('click',function() {
		var tipo = $('#contenido').attr('data-tipo');
		if (tipo==1){
			$('#1').attr('src','images/pon2oon3.jpg');
		}else if (tipo==2){
			$('#1').attr('src','images/armada3.jpg');
		}else{
			$('#1').attr('src','images/atomic3.jpg');
		}
		$('.i').hide();
	});
});