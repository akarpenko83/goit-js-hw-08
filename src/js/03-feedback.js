const throttle = require('lodash.throttle');

let formData = {
    email:"",
    message:"",
}
const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}

const formEmail = refs.form.elements.email; 
const formMessage = refs.form.elements.message;

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(saveToLocalStorage, 500))


let storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
    restoreFeedback(storedData)
    }


function saveToLocalStorage({target}) {
    const { value } = target;
    target.setAttribute("value", value);
    dataFill();
    updateLocalStorage();
};

function dataFill() {
    formData.email = formEmail.getAttribute("value");
    formData.message = formMessage.getAttribute("value");
}
function updateLocalStorage() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreFeedback(storedData) {
    const restoredData = JSON.parse(storedData);
    formEmail.setAttribute("value", restoredData.email);
    formMessage.setAttribute("value", restoredData.message);
    formMessage.textContent = restoredData.message;
    dataFill();
}
function onFormSubmit(event) {
    event.preventDefault();
    console.dir(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    interfaceCleaning(); 
};
function interfaceCleaning() {
    formEmail.setAttribute("value", "");
    formMessage.setAttribute("value", "");
    formMessage.textContent = "";
 }

