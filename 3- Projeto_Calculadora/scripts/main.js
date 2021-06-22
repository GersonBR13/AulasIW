function soma(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function  mult(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

// function limpaResult(){
//     const elementResult = document.querySelector("#alvo");
//     elementResult.textContent = "";
// }

function somaInputs(){
    const eleInput1 = document.querySelector("#input1");
    const eleInput2 = document.querySelector("#input2");

    var a = eleInput1.value;
    var b = eleInput2.value;

    a = parseInt(a);
    b = parseInt(b);

    const eleResultInputs = document.querySelector("#resultado");
    eleResultInputs.textContent = soma(a, b);
}
function subInputs(){
    const eleInput1 = document.querySelector("#input1");
    const eleInput2 = document.querySelector("#input2");

    var a = eleInput1.value;
    var b = eleInput2.value;

    a = parseInt(a);
    b = parseInt(b);

    const eleResultInputs = document.querySelector("#resultado");
    eleResultInputs.textContent = sub(a, b);
}
function multInputs(){
    const eleInput1 = document.querySelector("#input1");
    const eleInput2 = document.querySelector("#input2");

    var a = eleInput1.value;
    var b = eleInput2.value;

    a = parseInt(a);
    b = parseInt(b);

    const eleResultInputs = document.querySelector("#resultado");
    eleResultInputs.textContent = mult(a, b);
}
function divInputs(){
    const eleInput1 = document.querySelector("#input1");
    const eleInput2 = document.querySelector("#input2");

    var a = eleInput1.value;
    var b = eleInput2.value;

    a = parseInt(a);
    b = parseInt(b);

    const eleResultInputs = document.querySelector("#resultado");
    eleResultInputs.textContent = div(a, b);
}
