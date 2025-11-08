const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("numero").value);
    const num2 = parseFloat(document.getElementById("numerodois").value);
    const operacao = document.getElementById("operacao").value;
    const resultadoCampo = document.getElementById("resultado");

    let resultado;
    
    /*Validação dos numerais*/
    if (isNaN(num1) || isNaN(num2)) {
        alert("Insira dois números válidos.");
        return;
    }
    switch (operacao) {
        case "adicao":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            if( num2 == 0){
                alert("Não é possivel dividir por zero");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Selecione uma operação válida.");
            return;        
    }
    resultadoCampo.value = resultado;

    // Exibir resultado com vírgula (formato brasileiro)
    resultadoCampo.value = resultado.toLocaleString("pt-BR", { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 4 
});
    // Efeito visual ao mostrar o resultado
    resultadoCampo.classList.add("flash");
    setTimeout(() => resultadoCampo.classList.remove("flash"), 300);

});
