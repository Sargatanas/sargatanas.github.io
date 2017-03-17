"use strict";

// Задание 3
function answerThree() {
    let n = document.getElementById('input_3_1').value;
    let k = document.getElementById('input_3_2').value;

    let result = new XMLHttpRequest();
    result.open('GET',"../php/functions/numbersRound.php?n=" + n + "&k=" + k,false);
    result.send(null);

    document.getElementById('output_3').innerHTML = result.responseText;
}

function answerFour() {
    let num1 = document.getElementById('input_4_1').value;
    let num2 = document.getElementById('input_4_2').value;
    let base = document.getElementById('input_4_3').value;
    let operation = document.getElementById('input_4_4').value;

    if ((operation != '+') && (operation != '-') && (operation != '*') && (operation != '/') && (operation != '^')) {
        document.getElementById('output_4').innerHTML = 'некорректная операция';
    } else {
        switch (operation) {
            case '+': operation = 'sum'; break;
            case '-': operation = 'sub'; break;
            case '*': operation = 'mult'; break;
            case '/': operation = 'div'; break;
            case '^': operation = 'pow'; break;
        }

        let result = new XMLHttpRequest();
        result.open('GET',"../php/functions/notation.php?num1=" + num1 + "&num2=" + num2 + "&base=" + base + "&operation=" + operation,false);
        result.send(null);

        document.getElementById('output_4').innerHTML = result.responseText;
    }
}