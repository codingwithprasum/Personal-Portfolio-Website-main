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