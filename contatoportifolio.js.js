// Manipulação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validação simples
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
        // Limpar o formulário
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});