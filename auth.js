// Sign-up logic (unchanged)
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple form validation
    if (!firstName || !lastName || !email || !password) {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const user = { firstName, lastName, email, password };

    // Check if user already exists
    if (localStorage.getItem(email)) {
        alert("User already exists. Please log in.");
        return;
    }

    localStorage.setItem(email, JSON.stringify(user));

    alert('Sign-up successful!');
    window.location.href = 'login.html';
});

// Login logic (updated for First Name and Last Name)
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple form validation
    if (!firstName || !lastName || !email || !password) {
        alert("All fields are required.");
        return;
    }

    const user = JSON.parse(localStorage.getItem(email));

    if (!user || user.password !== password || user.firstName !== firstName || user.lastName !== lastName) {
        alert("Invalid login credentials.");
        return;
    }

    alert('Login successful!');
    window.location.href = 'quiz.html';
});

// Email validation function (unchanged)
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
