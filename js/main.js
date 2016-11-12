 $("#bt1").click(function() {
    		

				var lista1 = document.getElementById("exampleSelect1");
				var indiceSeleccionado1 = lista1.selectedIndex;
				var opcionSeleccionada1 = lista1.options[indiceSeleccionado1];
				var textoSeleccionado1 = opcionSeleccionada1.text;
				
				var lista2 = document.getElementById("exampleSelect2");
				var indiceSeleccionado2 = lista2.selectedIndex;
				var opcionSeleccionada2 = lista2.options[indiceSeleccionado2];
				var textoSeleccionado2 = opcionSeleccionada2.text;

				var nombreClient = document.getElementById("nombreCliente").value;
				

				document.getElementById("nombreFormCliente").innerHTML = "Gracias por Contactar " + nombreClient;
				document.getElementById("descripcionEquipo").innerHTML = "Por favor cumplimenta los campos que quedan para que podamos ayudarte en tu " + textoSeleccionado1 + " de la marca " + textoSeleccionado2;
				
				//alert(textoSeleccionado1);
    			$("#nuevapagina").removeClass("ocultada");
				

});

$("#botonModal").click(function() {
 	/* Act on the event */
 	$('#myModal').modal('hide');
 	window.location.href = "contacto.html";
 });

 $("#botonModal2").click(function() {
 	/* Act on the event */
 	$('#myModal2').modal('hide');
 	window.location.href = "contacto.html";
 });

$("#botonModal3").click(function() {
 	/* Act on the event */
 	$('#myModal3').modal('hide');
 	window.location.href = "contacto.html";
 });

$("#botonModal4").click(function() {
 	/* Act on the event */
 	$('#myModal4').modal('hide');
 	window.location.href = "contacto.html";
 });

 $("#accesoContacto").click(function() {
 	/* Act on the event */
 	window.location.href = "contacto.html";

 });