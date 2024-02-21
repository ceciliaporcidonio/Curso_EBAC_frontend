document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Obtém os valores dos campos
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        exibirMensagem('Formulário válido!', 'green');
    } else {
        exibirMensagem('Número B deve ser maior que número A!', 'red');
    }
});

function exibirMensagem(mensagem, cor) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.backgroundColor = cor;
}
