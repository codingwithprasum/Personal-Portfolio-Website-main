  // Get modal element
  var modal = document.getElementById("imageModal");

  // Get the modal image element
  var modalImg = document.getElementById("modalImg");

  // Get all images with the data-fullscreen attribute
  var images = document.querySelectorAll('img[data-fullscreen]');

  // Get the <span> element that closes the modal
  var closeBtn = document.querySelector(".close");

  // Add click event to each image
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      modal.style.display = "block"; // Show the modal
      modalImg.src = this.src; // Set the clicked image source to modal image
    });
  });

  // When the close button is clicked, close the modal
  closeBtn.onclick = function() { 
    modal.style.display = "none";
  }

  // Close the modal if clicked outside the image
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
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
