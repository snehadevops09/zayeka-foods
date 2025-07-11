const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your login logic here
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to dashboard or home page
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});