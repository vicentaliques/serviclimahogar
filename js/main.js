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
				
				//$(".cambiopagina").addClass("ocultada");
    			//$("#nuevapagina").removeClass("ocultada");
				

});