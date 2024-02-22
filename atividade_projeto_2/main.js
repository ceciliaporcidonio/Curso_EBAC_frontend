document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Obtém os valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    
    // Cria uma nova linha na tabela
    var novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;
    
    // Adiciona a nova linha à tabela
    document.querySelector('#tabela tbody').appendChild(novaLinha);
    
    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});
