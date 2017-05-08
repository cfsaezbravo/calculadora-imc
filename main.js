var peso = document.getElementById("peso").value;
var estatura = document.getElementById("estatura").value;

function calcularpeso(){
	var calculo = parseInt(peso*(estatura*2));
	return calculo;
}