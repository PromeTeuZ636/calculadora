// Função principal que será chamada ao clicar no botão
function calcularIMC() {
    // 1. Captura dos valores dos inputs e conversão para número
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoContainer = document.getElementById('resultado-container');

    // 2. Validação dos dados
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoContainer.innerHTML = '<span style="color: red;">Por favor, insira valores válidos para Peso e Altura.</span>';
        return; // Sai da função se a validação falhar
    }

    // 3. Cálculo do IMC: IMC = Peso / (Altura * Altura)
    const imc = peso / (altura * altura);
    // Arredonda para 2 casas decimais
    const imcArredondado = imc.toFixed(2);

    // 4. Determinação da Classificação e Classe CSS
    let classificacao = "";
    let classeCss = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        classeCss = "baixo-peso";
    } else if (imc >= 18.6 && imc <= 24.9) {
        classificacao = "Peso ideal (parabéns)";
        classeCss = "ideal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Levemente acima do peso";
        classeCss = "sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau I";
        classeCss = "obesidade-i";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau II (severa)";
        classeCss = "obesidade-ii";
    } else { // IMC acima de 40.0
        classificacao = "Obesidade III (mórbida)";
        classeCss = "obesidade-iii";
    }

    // 5. Exibição do Resultado
    // Apenas o valor do IMC e a Classificação, sem as frases introdutórias
    resultadoContainer.innerHTML = `
        <div class="resultado-imc">${imcArredondado}</div>
        <div class="classificacao ${classeCss}">**${classificacao}**</div>
    `;
}

// 6. Configuração do Event Listener no botão
document.getElementById('calcularBtn').addEventListener('click', calcularIMC);