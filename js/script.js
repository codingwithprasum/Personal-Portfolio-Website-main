var typed = new Typed('#element', {
  strings: ['Web Developer.', 'Software Developer.', 'Graphics Designer.', 'Web Designer.', 'Video Editor.', 'Content Creator.'],
  typeSpeed: 50,  // Faster typing speed
  backSpeed: 30,  // Faster backspacing speed
  startDelay: 200,  // Shorter delay before typing starts
  backDelay: 500,  // Reduced pause before backspacing
  loop: true,  // Infinite loop
  loopCount: Infinity,  // Keep looping infinitely
  showCursor: true,  // Show the blinking cursor
  cursorChar: '|',  // Customize the cursor character
  smartBackspace: true,  // Only backspace what doesn't match the previous string
  fadeOut: true,  // Enable fade-out effect
  fadeOutClass: 'typed-fade-out',  // CSS class for fade-out effect
  fadeOutDelay: 200,  // Faster fade-out delay
  shuffle: true,  // Shuffle the strings for randomness
});


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

