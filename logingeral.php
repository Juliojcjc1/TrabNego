<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>

<?php

$nome = $_GET["uname"];
$senha = $_GET["psw"];

if (($nome =="admin")&&($senha == "123")) {
	echo "Logado";
}else{
	echo "Não Logado";
}
?>

<body>

</body>
</html>