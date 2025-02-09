const contactmeElement = document.getElementById("contactme")
const entermailElement = document.getElementById("entermail")
const textareaElement = document.getElementById("textarea")
const submitElement = document.getElementById("submit")
const contactformElement = document.getElementById("contactform")

submitElement.addEventListener("click", function (event) {

    let entermail = entermailElement.value;
    let message = textareaElement.value;

    if (entermail != "" && message != "") {
        contactmeElement.innerText = "Thank you for reaching out, I will come back to you as soon as possible!";
        textareaElement.value = "";
        entermailElement.value = "";
        contactformElement.remove();

    } else {
        contactmeElement.innerText = "Contact me";
    }

});