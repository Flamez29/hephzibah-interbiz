const popupDiv = document.getElementById("popup"); // Get the element once
//const mainContent = document.body;

popupDiv.addEventListener('scroll', (event) => {
  event.preventDefault();
});
//  addScrollbars(popupDiv); // Add scrollbars to the popup

function openPopup() {
  popupDiv.classList.add("open-popup"); // Use the existing variable
 // mainContent.classList.add('blurred');

}

function closePopup() {
  popupDiv.classList.remove("open-popup"); // Use the existing variable
//  mainContent.classList.remove('blurred');
}

// POPUP BACK-TO-TOP BUTTON
const popup = document.querySelector('.popup');
const backToTopBtn = popup.querySelector('#popup-icon-2');

popup.addEventListener('scroll', () => {
    if (popup.scrollTop > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// BACK TO THE TOP BUTTON STYLING 
/*const popup = document.querySelector('.popup');
const backToTopBtn = popup.querySelector('#popup-icon-2');
const popupContent = popup.querySelector('.popup-rd'); // Assuming the content container

popup.addEventListener('scroll', () => {
  const scrollTop = popup.scrollTop;
  const popupContentHeight = popupContent.clientHeight;
  const buttonHeight = backToTopBtn.clientHeight;

  if (scrollTop + buttonHeight > popupContentHeight) {
    backToTopBtn.style.bottom = '20px'; // Adjust the bottom position as needed
  } else {
    backToTopBtn.style.bottom = `calc(100% - ${buttonHeight}px)`; // Position at the bottom of the content
  }
});*/
