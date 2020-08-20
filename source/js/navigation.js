var mainNavBlock = document.querySelector(".main-nav__wrapper");
var buttonOpen = document.querySelector(".main-nav__toggle");
var buttonClose = document.querySelector(".main-nav__close");
var classBlocksNone = document.querySelector(".popup--close");
var widthWindow = document.body.clientWidth;
if (widthWindow < 768) {
    mainNavBlock.classList.add("popup--close");
    buttonClose.classList.remove("popup--close");
    buttonOpen.addEventListener("click", function(evt) {
        buttonOpen.classList.add("popup--close");
        evt.preventDefault();
        mainNavBlock.classList.remove("popup--close");
    });
    buttonClose.addEventListener("click", function(evt) {
        mainNavBlock.classList.add("popup--close");
        evt.preventDefault();
        buttonOpen.classList.remove("popup--close");
    });
}
