const addCart = document.querySelector('.add-btn');
const cart = document.querySelector('#icons');

addCart.addEventListener('click', () => {
 cartAdded = cart.classList.toggle('active');
});

window.addEventListener('click', (e) => {
  if (e.target.closest('.button-group')) {
    toggleButtonGroup(e.target);
  }
});


document.querySelector('.size').addEventListener('click', (e) => {
  setTimeout((buttonGroup) => {
    console.log('Value:', getButonGroupValue(buttonGroup));
  }, 100, e.currentTarget);
});

function toggleButtonGroup(button) {
  const buttonGroup = button.closest('.button-group');
  buttonGroup.querySelectorAll('button').forEach((currButton) => {
    if (currButton === button && !currButton.dataset.active) {
      currButton.dataset.active = true;
    } else {
      delete currButton.dataset.active;
    }
  });
}

function getButonGroupValue(buttonGroup) {
  return buttonGroup?.querySelector('[data-active]')?.value;
}







