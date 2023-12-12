
document.addEventListener('DOMContentLoaded', function () {
 //
  const imageContainer = document.getElementById('imageContainer');
  const textOverlay = document.getElementById('textOverlay');
  const textElement = textOverlay.querySelector('p');
  
  let isHovered = false;
  
  // Add event listeners for mouse enter and mouse leave
  imageContainer.addEventListener('mouseenter', () => {
      isHovered = true;
  
      // Set the height of the text overlay to match the image's height
      textOverlay.style.height = `${imageContainer.querySelector('.image').clientHeight}px`;
  
      // Set the opacity of the text to 1 when hovering
      textElement.style.opacity = 1;
  });
  
  imageContainer.addEventListener('mouseleave', () => {
      isHovered = false;
  
      // Reset the height to 0 and the text opacity to 0 when the mouse leaves
      textOverlay.style.height = '0';
      textElement.style.opacity = 0;
  });
  
  // Add animation end event listener
  textElement.addEventListener('animationend', () => {
      // Check if the mouse is still over the container
      if (!isHovered) {
          // If not, hide the text
          textElement.style.opacity = 0;
      }
  });
  

  

  // Javascript for cycling title
  // List of words to rotate
  const words = ["Rupee", "Woman", " 'Negro' ", "Colony"];

  // Get the rotating text element
  const rotatingText = document.querySelector('.rotating-text');

  // Function to rotate the words
  function rotateWords() {
    const currentWord = rotatingText.textContent;
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    rotatingText.textContent = words[nextIndex];
  }

  // Set an interval to rotate words every 3 seconds (adjust as needed)
  setInterval(rotateWords, 3000);
  
  // JavaScript code for callouts
  const callouts = document.querySelectorAll('.callout');

  callouts.forEach(callout => {
    callout.addEventListener('mouseover', () => {
      const calloutText = callout.querySelector('.callout-text');
      const content = callout.getAttribute('data-content');
      calloutText.innerText = content;
    });
  });

  // Ensure that some element has focus initially
  document.body.setAttribute('tabindex', '0');
  document.body.focus();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    scrollToNextSection();
  } else if (event.key === 'ArrowLeft') {
    scrollToPreviousSection();
  }
});

function scrollToNextSection() {
  const currentSection = document.querySelector('.section.active');
  const nextSection = currentSection.nextElementSibling;

  if (nextSection) {
    currentSection.classList.remove('active');
    nextSection.classList.add('active');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToPreviousSection() {
  const currentSection = document.querySelector('.section.active');
  let previousSection = currentSection.previousElementSibling;

  if (!previousSection) {
    const sections = document.querySelectorAll('.section');
    previousSection = sections[sections.length - 1];
  }

  currentSection.classList.remove('active');
  previousSection.classList.add('active');
  previousSection.scrollIntoView({ behavior: 'smooth' });
}


// SLIDE BOOK ANIMATION
function openBook() {
  // Slide out the image container to the center
  document.getElementById('image-container2').style.transform = 'translateX(0)';
  
  // Slide in the new text container from offscreen to the left
  document.getElementById('new-text-container2').style.transform = 'translateX(0)';
  document.getElementById('new-text-container2').style.opacity = '1';
}

// CURSOR GRADIENT

document.addEventListener('mousemove', function (e) {
  var cursor = document.getElementById('cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


// USER CALLOUT (end)
function addCallout() {
  const phrase = document.getElementById('phrase').value;
  const color = document.getElementById('color').value;
  const message = document.getElementById('message').value;

  const mainText = document.getElementById('mainText');
  const textContent = mainText.innerHTML;

  // Wrap the target phrase with a span and add a callout class
  const newTextContent = textContent.replace(new RegExp(`(${phrase})`, 'g'), `<span class="callout" style="background-color:${color}">$1<span class="callout-text">${message}</span></span>`);

  mainText.innerHTML = newTextContent;

  // Clear the form fields
  document.getElementById('phrase').value = '';
  document.getElementById('color').value = '#000000';
  document.getElementById('message').value = '';
}

