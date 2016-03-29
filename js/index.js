/* Asociamos función canvasApp a carga de página */
window.addEventListener('load', calculadora, false);

function calculadora(){

	var boton_html = document.getElementById("boton_calc");

	var valor_boton = null;

	var cero = document.getElementById("cero");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var igual = document.getElementById("igual");
	var mas = document.getElementById("mas");
	var menos = document.getElementById("menos");
	var mult = document.getElementById("mult");
	var div = document.getElementById("div");
	var ans = document.getElementById("ans");
	var punto = document.getElementById("punto");
	var reset = document.getElementById("reset");

	cero.addEventListener('click', botonSel, false);
  uno.addEventListener('click', botonSel, false);
	dos.addEventListener('click', botonSel, false);
	tres.addEventListener('click', botonSel, false);
	cuatro.addEventListener('click', botonSel, false);
	cinco.addEventListener('click', botonSel, false);
	seis.addEventListener('click', botonSel, false);
	siete.addEventListener('click', botonSel, false);
	ocho.addEventListener('click', botonSel, false);
	nueve.addEventListener('click', botonSel, false);
  igual.addEventListener('click', botonSel, false);
  mas.addEventListener('click', botonSel, false);
	menos.addEventListener('click', botonSel, false);
	mult.addEventListener('click', botonSel, false);
	div.addEventListener('click', botonSel, false);
	ans.addEventListener('click', botonSel, false);
	punto.addEventListener('click', botonSel, false);
	reset.addEventListener('click', botonSel, false);

	var oper = 0;
	var answer = "";

	function changer(id, newValue) {
		var element = document.getElementById(id);
		element.innerHTML = newValue;
	}

	function poner_Num(id, newValue) {
		var element = document.getElementById(id);
		element.innerHTML = element.innerHTML + newValue;
	}

	function botonSel(e) {
		var boton = e.target;
		var simb_boton = boton.getAttribute('id');

		switch(simb_boton){
			case("punto"):
			    valor_boton=".";
			    pulso_Boton(valor_boton);
		    	break;
			case("cero"):
			    valor_boton="0";
			    pulso_Boton(valor_boton);
		    	break;
			case("uno"):
				valor_boton="1";
				pulso_Boton(valor_boton);
				break;
			case("dos"):
			    valor_boton="2";
			    pulso_Boton(valor_boton);
		        break;
			case("tres"):
			    valor_boton="3";
			    pulso_Boton(valor_boton);
		        break;
			case("cuatro"):
			    valor_boton="4";
			    pulso_Boton(valor_boton);
		        break;
			case("cinco"):
			    valor_boton="5";
			    pulso_Boton(valor_boton);
		        break;
			case("seis"):
			    valor_boton="6";
			    pulso_Boton(valor_boton);
		        break;
			case("siete"):
			    valor_boton="7";
			    pulso_Boton(valor_boton);
		        break;
			case("ocho"):
			    valor_boton="8";
			    pulso_Boton(valor_boton);
		        break;
			case("nueve"):
			    valor_boton="9";
			    pulso_Boton(valor_boton);
		        break;
    	case("igual"):
		    valor_boton="=";
		    pulso_Igual();
	        break;
    	case("mas"):
		    valor_boton="+";
				if (oper == 0){
					pulso_Suma();
					oper++;
				}else{
					changer("resultado", "Atencion, ya ha elegido su operacion");
				}
	        break;
			case("menos"):
		    valor_boton="-";
				pulso_Resta();
	        break;
			case("mult"):
		    valor_boton="x";
				if (oper == 0){
					pulso_Mult();
					oper++;
				}else{
					changer("resultado", "Atencion, ya ha elegido su operacion");
				}
	        break;
			case("div"):
		    valor_boton="%";
				if (oper == 0){
					pulso_Div();
					oper++;
				}else{
					changer("resultado", "Atencion, ya ha elegido su operacion");
				}
	        break;
			case("ans"):
			    valor_boton="ans";
					pulso_Ans();
						break;
    	case("reset"):
		    valor_boton="clear";
		    pulso_Clear();
	        break;
		  }
		console.log(valor_boton);
		boton_html.innerHTML = valor_boton;

    }

	function pulso_Clear(){
		var element = document.getElementById("calculadora");
		element.innerHTML ="";
		changer("resultado", "");
		oper=0;
	}

	function pulso_Boton(boton){
		poner_Num("calculadora",boton);
	}
	function suma(nums) {
		var total = 0;
		console.log(nums);
		total = parseFloat(nums[0]) + parseFloat(nums[1]);
		var result = total.toString();
		changer("resultado", result);
		answer = result;
	}

	function resta(nums) {
		var total = 0;
		console.log(nums);
		total = nums[0] - nums[1];
		var result = total.toString();
		changer("resultado", result);
		answer = result;
	}

	function multiplicacion(nums) {
		var total = 0;
		console.log(nums);
		total = nums[0] * nums[1];
		var result = total.toString();
		changer("resultado", result);
		answer = result;
	}

	function division(nums) {
		var total = 0;
		console.log(nums);
		total = nums[0] / nums[1];
		var result = total.toString();
		changer("resultado", result);
		answer = result;
	}

	function pulso_Igual(){
		var div = document.getElementById("calculadora");
		var element = div.innerHTML;
		if (element.indexOf("+") !== -1) {
			var nums = element.split("+");
			suma(nums);
		} else if (element.indexOf("-") !== -1) {
			var nums = element.split("-");
			resta(nums);
		}else if (element.indexOf("x") !== -1) {
			var nums = element.split("x");
			multiplicacion(nums);
		}else if (element.indexOf("%") !== -1) {
			var nums = element.split("%");
			division(nums);
		}
		oper = 0;
		changer("calculadora","");
	}

	function pulso_Suma(){
			poner_Num("calculadora","+");
	}

	function pulso_Resta(){
			poner_Num("calculadora","-");
	}

	function pulso_Mult(){
			poner_Num("calculadora","x");
	}

	function pulso_Div(){
			poner_Num("calculadora","%");
	}

	function pulso_Ans(){
		  poner_Num("calculadora",answer);
	}
}
