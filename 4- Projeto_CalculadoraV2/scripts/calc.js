var valorInput = document.getElementById('calc');
var valor;
var opc;

function valor0(){
  var atual = valorInput.value
  valorInput.value =  atual + "0";
}

function valor1(){
  var atual = valorInput.value
  valorInput.value =  atual + "1";
}

function valor2(){
  var atual = valorInput.value
  valorInput.value =  atual + "2";
}

function valor3(){
  var atual = valorInput.value
  valorInput.value =  atual + "3";
}

function valor4(){
  var atual = valorInput.value
  valorInput.value =  atual + "4";
}

function valor5(){
  var atual = valorInput.value
  valorInput.value =  atual + "5";
}

function valor6(){
  var atual = valorInput.value
  valorInput.value =  atual + "6";
}

function valor7(){
  var atual = valorInput.value
  valorInput.value =  atual + "7";
}

function valor8(){
  var atual = valorInput.value
  valorInput.value =  atual + "8";
}

function valor9(){
  var atual = valorInput.value
  valorInput.value =  atual + "9";
}

function soma(){
  valor = valorInput.value;
  opc = "soma";
  valorInput.value = "";
}

function sub(){
  valor = valorInput.value;
  opc = "sub";
  valorInput.value = "";
}

function mult(){
  valor = valorInput.value;
  opc = "mult";
  valorInput.value = "";
}

function div(){
  valor = valorInput.value;
  opc = "div";
  valorInput.value = "";
}

function ce(){
  valorInput.value = "";
}

function result(){
  if(opc == "soma"){
    valorInput.value = parseInt(valorInput.value) + parseInt(valor);
  }
  if(opc == "sub"){
    valorInput.value = parseInt(valor) - parseInt(valorInput.value);
  }
  if(opc == "mult"){
    valorInput.value = parseInt(valorInput.value) * parseInt(valor);
  }
  if(opc == "div"){
    valorInput.value = parseInt(valor) / parseInt(valorInput.value);
  }
}