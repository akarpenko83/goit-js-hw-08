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

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(saveToLocalStorage, 500))

onload = () => {
    let storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
        restoreFeedback(storedData)
    }

};

function saveToLocalStorage({target}) {
    const { value } = target;
    target.setAttribute("value", value);
    dataFill();
    updateLocalStorage();
};

function dataFill() {
    formData.email = refs.form.elements.email.getAttribute("value");
    formData.message = refs.form.elements.message.getAttribute("value");
}
function updateLocalStorage() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreFeedback(storedData) {
    const restoredData = JSON.parse(storedData);
    refs.form.elements.email.setAttribute("value", restoredData.email);
    refs.form.elements.message.textContent = restoredData.message;
}
function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    interfaceCleaning();
    console.dir(formData);
};

function interfaceCleaning() {
    formData.email = "";
    formData.message = "";
    refs.form.elements.email.setAttribute("value", "");
    refs.form.elements.message.textContent = "";
 }

