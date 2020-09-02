var buttonSubmit = document.querySelector('.form-review__submit');
var modalPopupError = document.querySelector('.modal-error');
var modalPopupSuccess = document.querySelector('.modal-success');
var popupClose = document.querySelector('.popup--close');
var modalErrorButton = document.querySelector('.modal-error__button');
var modalSuccessButton = document.querySelector('.modal-success__button')
var borderRed = document.querySelector('.input--warning')
var nameInput = document.querySelector('.person__input--name');
var surnameInput = document.querySelector('.person__input--surname');
var mailInput = document.querySelector('.contacts-person__input--mail');
var telInput = document.querySelector('.contacts-person__input--tel');
buttonSubmit.addEventListener('click', function(evt) {
    evt.preventDefault();
    windowPopup.classList.toggle('modal-popup');
});
formBlock.addEventListener('submit', function(evt) {
    if (!nameInput.value || !surnameInput.value || !mailInput.value || !telInput.value) {
      modalPopupError.classList.remove('popup--close');
        evt.preventDefault();

    }
});
