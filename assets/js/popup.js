const popupDiv = document.getElementById("popup"); // Get the element once

function addScrollbars(element) {
  element.style.overflowY = "scroll";
}

addScrollbars(popupDiv); // Add scrollbars to the popup

function openPopup() {
  popupDiv.classList.add("open-popup"); // Use the existing variable
}

function closePopup() {
  popupDiv.classList.remove("open-popup"); // Use the existing variable
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

backToTopBtn.addEventListener('click', () => {
    popup.scrollTo({ top: 0, behavior: 'smooth' });
});