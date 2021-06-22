var valorInput = document.getElementById('calc');
var valorHist = document.getElementById('hist');
var valor;
var opc;

function valor0(){
  var atual = valorInput.value;
  valorInput.value =  atual + "0";
}

function valor1(){
  var atual = valorInput.value;
  valorInput.value =  atual + "1";
}

function valor2(){
  var atual = valorInput.value;
  valorInput.value =  atual + "2";
}

function valor3(){
  var atual = valorInput.value;
  valorInput.value =  atual + "3";
}

function valor4(){
  var atual = valorInput.value;
  valorInput.value =  atual + "4";
}

function valor5(){
  var atual = valorInput.value;
  valorInput.value =  atual + "5";
}

function valor6(){
  var atual = valorInput.value;
  valorInput.value =  atual + "6";
}

function valor7(){
  var atual = valorInput.value;
  valorInput.value =  atual + "7";
}

function valor8(){
  var atual = valorInput.value;
  valorInput.value =  atual + "8";
}

function valor9(){
  var atual = valorInput.value;
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
  var hoje = new Date();
  var dd = String(hoje.getDate()).padStart(2, '0');
  var mm = String(hoje.getMonth() + 1).padStart(2, '0');
  var yyyy = hoje.getFullYear();
  var sec = String(hoje.getSeconds());
  var min = String(hoje.getMinutes());
  var hours = String(hoje.getHours());
  hoje = dd + '/' + mm + '/' + + yyyy + "  " + hours + ":" + min + ":" + sec;
  var hist = valorHist.value;

  if(opc == "soma"){
    var atual1 =  `${parseInt(valor)} + ${parseInt(valorInput.value)} = ${parseInt(valorInput.value) + parseInt(valor)}  ${hoje} \n`;
    valorHist.value = hist + atual1;
    valorInput.value = parseInt(valorInput.value) + parseInt(valor);
  }
  if(opc == "sub"){
    var atual1 =  `${parseInt(valor)} - ${parseInt(valorInput.value)} = ${parseInt(valor) - parseInt(valorInput.value)}  ${hoje} \n`;
    valorHist.value = hist + atual1;
    valorInput.value = parseInt(valor) - parseInt(valorInput.value);
  }
  if(opc == "mult"){
    var atual1 =  `${parseInt(valor)} x ${parseInt(valorInput.value)} = ${parseInt(valorInput.value) * parseInt(valor)}  ${hoje} \n`;
    valorHist.value = hist + atual1;
    valorInput.value = parseInt(valorInput.value) + parseInt(valor);
  }
  if(opc == "div"){
    var atual1 =  `${parseInt(valor)} ÷ ${parseInt(valorInput.value)} = ${parseInt(valor) / parseInt(valorInput.value)}  ${hoje} \n`;
    valorHist.value = hist + atual1;
    valorInput.value = parseInt(valor) / parseInt(valorInput.value);
  }
}