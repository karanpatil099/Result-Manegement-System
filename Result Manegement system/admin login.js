document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('login-form').classList.add('hidden');
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');

        setTimeout(() => {
            window.location.href = 'admin_dashboard.html';
        }, 2000);
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

