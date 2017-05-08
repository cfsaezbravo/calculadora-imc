

function calcularpeso(){
	var peso = document.getElementById("peso").value;
	var estatura = document.getElementById("estatura").value;
	var calculo = parseInt(peso*(estatura*2));
	return calculo;
}