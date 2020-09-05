var mainNavBlock = document.querySelector(".main-nav__wrapper");
var buttonOpen = document.querySelector(".main-nav__toggle");
var buttonClose = document.querySelector(".main-nav__close");
var widthWindow = document.body.clientWidth;

if (widthWindow < 768) {
    mainNavBlock.classList.add("main-nav--hidden");
    buttonClose.classList.remove("main-nav--hidden");
    buttonOpen.addEventListener("click", function(evt) {
        buttonOpen.classList.add("main-nav--hidden");
        evt.preventDefault();
        mainNavBlock.classList.remove("main-nav--hidden");
    });
    buttonClose.addEventListener("click", function(evt) {
        mainNavBlock.classList.add("main-nav--hidden");
        evt.preventDefault();
        buttonOpen.classList.remove("main-nav--hidden");
    });
}
