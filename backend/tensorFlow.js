// Required imports for TensorFlow.js and ColorThief
if (typeof document !== 'undefined') { // Check if running in browser environment
  // Import TensorFlow.js via script tag if not already present
  if (!window.tf) {
    const tfScript = document.createElement('script');
    tfScript.src = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.18.0/dist/tf.min.js';
    document.head.appendChild(tfScript);
  }
  
  // Import ColorThief via script tag if not already present
  if (!window.ColorThief) {
    const colorThiefScript = document.createElement('script');
    colorThiefScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.min.js';
    document.head.appendChild(colorThiefScript);
  }
}

// Load the pre-trained model (MobileNet)
async function loadModel() {
  const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
  return model;
}

// Function to classify the uploaded image
async function classifyImage(imageElement) {
  try {
    const model = await loadModel();
    const tensor = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
    const predictions = await model.predict(tensor).data();
    const topPrediction = Array.from(predictions).indexOf(Math.max(...predictions));
    
    const predictionElement = document.getElementById('prediction');
    if (predictionElement) {
      predictionElement.innerText = `Prediction: Class ${topPrediction}`;
    }
  } catch (error) {
    console.error('Error classifying image:', error);
  }
}

// Function to generate color palette
function generatePalette(imageElement) {
  try {
    if (!window.ColorThief) {
      console.error('ColorThief library not loaded');
      return;
    }
    
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(imageElement, 5); // Get the top 5 dominant colors
    const paletteContainer = document.getElementById('palette-container');
    
    if (paletteContainer) {
      paletteContainer.innerHTML = ''; // Clear previous palette
      
      // Display the palette
      palette.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        paletteContainer.appendChild(colorBox);
      });
    }
  } catch (error) {
    console.error('Error generating palette:', error);
  }
}

// Single event listener for image upload that handles both functionalities
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    
    if (imageUpload) {
      imageUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function () {
          const img = new Image();
          img.src = reader.result;
          img.onload = () => {
            // For classification
            img.id = 'uploaded-image';
            const imageContainer = document.getElementById('image-container');
            
            if (imageContainer) {
              imageContainer.innerHTML = ''; // Clear previous image
              imageContainer.appendChild(img);
              
              // Run both functions on the same image
              classifyImage(img);
              generatePalette(img);
            } else {
              // Fallback if container not found
              document.body.appendChild(img);
              classifyImage(img);
            }
          };
        };
        reader.readAsDataURL(file);
      });
    }
  });
}