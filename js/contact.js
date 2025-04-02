function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("form-message").textContent = "Thank you for your message!";
        document.getElementById("form-message").style.color = "green";
    } else {
        document.getElementById("form-message").textContent = "Please fill out all fields.";
    }
}



const toggleButton = document.getElementById('modeToggle');
const body = document.body;

// Check for saved mode in localStorage
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️'; // Set to light mode icon
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        toggleButton.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        event.preventDefault(); // Stop form submission
    } else {
        alert("Login successful (for demo purposes).");
    }
});
