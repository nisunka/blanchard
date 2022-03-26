const modalBtns = document.querySelectorAll('.gallery__slide--btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

function closeModal() {
  modalOverlay.classList.remove('modal-overlay--visible');
  modals.forEach((el) => {
    el.classList.remove('modal--visible');
  });
}

// открытие модального окна

modalBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target = "${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modals.forEach((modal) => {
  const closeBtn = modal.querySelector(".js-modal-exit");
  closeBtn.addEventListener('click', closeModal);
});

// закрытие модального окна
modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    closeModal();
  }
});
