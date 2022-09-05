'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //<-- all '.show-modal'

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    //classList property itself has a couple of methods.
    modal.classList.remove('hidden'); //<-- dont use dot (.)
    overlay.classList.remove('hidden');
  });

const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', CloseModal);

overlay.addEventListener('click', CloseModal);

////////////////////////////////////////////////

//keyboard events:
//keyboard events are also called global events because they do not happen on one specific element.
//and for global events like keyboard events we usaully list and on the whole document.
//three types of events for the keybord.

document.addEventListener('keydown', function (e) {
  console.log('A key was pressed');
  console.log(e.key);

  // console.log('Esc was pressed');
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      CloseModal();
    }
  }
});
