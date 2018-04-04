var contagem = 0;
function validarN() {
	var objnome = document.getElementById("nome");
	var nome = objnome.value;
	var n = nome.length;

	if((n > 4) && (n < 40))
	{
		contagem++;
	}else{
		alert("Nome Inválido");
	}
}	
	function validarU() {
		var objusu = document.getElementById("usuario");
		var usuario = objusu.value;
		var u = usuario.length;
		if(u>0){
					contagem++;
	}else{
		alert("Digite um e-mail válido");
	}
}
	
	function validarCPF(){
		
	var objLink = document.getElementById("cpf");
	var cpf = objLink.value;
	var n = cpf.length;
	var constante = 11;
	var i = 0;
	var control = 0;
	var c = false;
	var verificador = 0;

	if(n != 11)
	{

		alert("Cpf inválido! Digite apenas os 11 dígitos do seu cpf!");
	
	}else{

		do
		{

			control = control + (cpf.charAt(i)*constante);
			i++;
			constante--;
			if(constante == 1)
			{
				c = true;
			}

		}while(c == false);

		

		control = (control*10);
		verificador = control%11;
		if(verificador >= 10)
		{
			verificador = 0;
		}

		/*alert("Teste: control: "+control+"; constante: "+constante+"; i: "+i+"; verificador: "+verificador);
		*/

		if(verificador == cpf.charAt(10))
		{

		contagem++;
		}else{

			alert("Cpf Inválido!");

		}

	}
}

	function validarSenha() {
	var objsenha = document.getElementById("senha");
	var senha = objsenha.value;
	var objcsenha = document.getElementById("csenha");
	var csenha = objcsenha.value;
	var s = senha.length;
	var l;
	var x;
	var contN = 0;
	var contL = 0;
	var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for (var c = 0; c <s; c++) {
	x = senha.charAt(c);

	for (var b = 0; b < 52; b++) {
		letras.charAt(b);
		if(letras.charAt(b)==x){
			contL++
		}
	}
}
	for (var i = 0; i <s; i++) {
	l = senha.charAt(i);

	for (var z=0; z <= 9; z++) {

		if(z==l){

			contN++;

			}
		}

		}
	if((contN>0) && (contL>0)&&(s>(contN+contL))&&(s>7)&&(s<15)){
	if (senha==csenha) {
		contagem++;
	}else{
	alert("as senhas não são iguais");
	}
		}else{
		alert("Senha Inválida"); 
		
}

	}


		function DataNas() {
	var objdataN = document.getElementById("dataN");
	var dataN = objdataN.value;
	var D = dataN.length;
	if(D>0){
		contagem++;
	}else{
		alert("Data de nascimento inválida");
	}
}

		function Endereco() {
	var objender = document.getElementById("ender");
	var ender = objender.value;
	var E = ender.length;
	if(E>0){
		contagem++;
	}else{
		alert("Endereço inválido");
	}
}

	function Cep(){
		var objcep = document.getElementById("cep");
		var cep = objcep.value;
		var C = cep.length;
		if(C==8){
		contagem++;
		}else{
			alert("cep inválido");
		}
	}

	function Cadastrar(){
		if(contagem==7){
			alert("Usuário cadastrado com sucesso");
			contagem=0;
		}else{
			contagem=0;
		}
	}



