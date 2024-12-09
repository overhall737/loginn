document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login realizado com sucesso!');
        document.getElementById('message').textContent = '';
    } else {
        document.getElementById('message').textContent = 'Usuário ou senha inválidos!';
    }
});
