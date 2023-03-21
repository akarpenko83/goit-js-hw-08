const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),

}
console.log(refs.form);
console.log(refs.input);
console.log(refs.textarea);

// console.log(localStorage.getItem("feedback-form-state"));
refs.form.addEventListener("submit", onFormSubmit);
refs.input.addEventListener("input", throttle(saveToLocalStorage, 500))
refs.textarea.addEventListener("input", throttle(saveToLocalStorage, 500))

function saveToLocalStorage(event) {
    const storageData = {};
    const userData = event.target.value;

    storageData.email = userData;
    localStorage.setItem("feedback-form-state", JSON.stringify(storageData));
};
