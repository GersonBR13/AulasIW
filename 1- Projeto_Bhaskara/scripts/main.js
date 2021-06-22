var a = 1;
var b = 12;
var c = -13;

var delta = (Math.pow(b, 2)) -4 * a * c;
console.log(delta); 

var x1 = (-b + Math.sqrt(delta)) / (2 * a);
var x2 = (-b - Math.sqrt(delta)) / (2 * a);

var paragrafo = document.querySelector("#alvo");
paragrafo.textContent = "Sendo A = 1, B = 12 e C = -13, sendo delta igual a " + delta + ", temos x1 = " + x1 + " e x2 = " + x2;