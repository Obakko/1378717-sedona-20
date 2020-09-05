var buttonSubmit = document.querySelector(".form-review__submit");
var modalPopupError = document.querySelector(".modal-error");
var modalPopupSuccess = document.querySelector(".modal-success");
var popupClose = document.querySelector(".popup--close");
var modalErrorButton = document.querySelector(".modal-error__button");
var modalSuccessButton = document.querySelector(".modal-success__button");
var borderRed = document.querySelector(".input--warning");
var nameInput = document.querySelector(".person__input--name");
var surnameInput = document.querySelector(".person__input--surname");
var mailInput = document.querySelector(".contacts-person__input--mail");
var telInput = document.querySelector(".contacts-person__input--tel");

buttonSubmit.addEventListener("click", function(evt) {
  nameInput.classList.remove("input--warning");
  surnameInput.classList.remove("input--warning");
  mailInput.classList.remove("input--warning");
  telInput.classList.remove("input--warning");
  if (!nameInput.value || !surnameInput.value || !mailInput.value || !telInput.value) {
    modalPopupError.classList.remove("popup--close");
    if(!nameInput.value) {
      nameInput.classList.add("input--warning");
    };
    if(!surnameInput.value) {
      surnameInput.classList.add("input--warning");
    };
    if(!mailInput.value) {
      mailInput.classList.add("input--warning");
    };
    if(!telInput.value) {
      telInput.classList.add("input--warning");
    };
  } else {
    modalPopupSuccess.classList.remove("popup--close");
  }
  evt.preventDefault();
});

modalErrorButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopupError.classList.add("popup--close");
});

modalSuccessButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopupSuccess.classList.add("popup--close");
});
