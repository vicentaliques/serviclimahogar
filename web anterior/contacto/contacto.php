<?php

	$para = 'vicent@serviclima.es';
	$asunto = 'Mensaje desde web Hogar';
	
	$mailheader = "From: ".$_POST["email1"]."\r\n";
	$mailheader .= "Reply-To: ".$_POST["email1"]."\r\n";
	$mailheader .= "Content-type: text/html;charset=utf-8\r\n";

	$mensaje = "Nombre: " .$_POST["nombre1"]."\n";
	$mensaje .= "\n<br>Modelo: " .$_POST["modelo"]."\n";
	$mensaje .= "\n<br>Tipo de Aparato: " .$_POST["tipoAparato"]."\n";
	$mensaje .= "\n<br>Marca: " .$_POST["tipoMarca"]."\n";
	
	$mensaje .= "\n<br>Email: " .$_POST["email1"]."\n";
	$mensaje .= "\n<br>Mensaje: " .nl2br($_POST["mensaje"])."\n";

	mail($para, $asunto, $mensaje, $mailheader) or die("Error al enviar el email");

	header('Location: http://www.serviclima.es/hogar');


?>