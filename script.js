function calculateResult() {
    var primeiroNumero = parseFloat(document.getElementById('input1').value);
    var segundoNumero = parseFloat(document.getElementById('input2').value);
    var operacao = document.getElementById('operation').value;
    var resultado;

    switch (operacao) {
        case 'add':
            resultado = primeiroNumero + segundoNumero;
            break;
        case 'subtract':
            resultado = primeiroNumero - segundoNumero;
            break;
        case 'multiply':
            resultado = primeiroNumero * segundoNumero;
            break;
        case 'divide':
            resultado = primeiroNumero / segundoNumero;
            break;
    }

    document.getElementById('result').textContent = 'Resultado: ' + resultado;
}
