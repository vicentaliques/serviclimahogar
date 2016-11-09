<?php

	$para = 'vicentaliques@gmail.com, vicentaliques@hotmail.com';
	$asunto = 'Mensaje desde web';
	
	$mailheader = "From: ".$_POST["email1"]."\r\n";
	$mailheader .= "Reply-To: ".$_POST["email1"]."\r\n";
	$mailheader .= "Content-type: text/html;charset=utf-8\r\n";

	$mensaje = "Modelo: " .$_POST["modelo"]."\n";
	$mensaje .= "\n<br>Email: " .$_POST["email1"]."\n";
	$mensaje .= "\n<br>Mensaje: " .nl2br($_POST["mensaje"])."\n";

	mail($para, $asunto, $mensaje, $mailheader) or die("Error al enviar el email");

	header('Location: http://www.arttilugios.es/serviclimahogar');


?>