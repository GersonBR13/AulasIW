var deltaCalc = new Function('a', 'b', 'c', 'return Math.pow(b, 2) -4 * a * c');
var delta = deltaCalc(1, 12, -13);

var x1Calc = new Function('a', 'b', 'return (-b + Math.sqrt(delta)) / (2 * a)');
var x1 = x1Calc(1, 12);

var x2Calc = new Function('a', 'b', 'return (-b - Math.sqrt(delta)) / (2 * a)');
var x2 = x2Calc(1, 12);

if(delta < 0){
    var paragrafo = document.querySelector("#alvo");
    paragrafo.textContent = 'Não possuí raizes reais.';
}

if(delta == 0){
    var paragrafo = document.querySelector("#alvo");
    paragrafo.textContent = 'Possí apenas uma raiz real, e é: ' + x1;
}

if(delta > 1){
    var paragrafo = document.querySelector("#alvo");
    paragrafo.textContent = 'Sendo A = 1, B = 12 e C = -13, sendo delta = ' + delta + ', temos x1 = ' + x1 + ' e x2 = ' + x2;
}