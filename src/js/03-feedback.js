import throttle from "lodash.throttle";

const refs = {
    feedbackForm: document.querySelector('.js-feedback-form'),
    emailInput: document.querySelector('input'),
    messageInput: document.querySelector('textarea')
}

const formData = {
    email: '',
    message: '',
}

refs.feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset();
    
})

refs.emailInput.addEventListener('input', throttle((event) => {
    // console.log(event.target.value);
    formData.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))

refs.messageInput.addEventListener('input', throttle((event) => {
    // console.log(event.target.value);
    formData.message = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))

window.addEventListener('load', () => {
    const localStorageData = localStorage.getItem("feedback-form-state")

    if (localStorageData) {
        const data = JSON.parse(localStorageData)

        refs.emailInput.value = data.email;
        refs.messageInput.value = data.message;

        formData.email = data.email;
        formData.message = data.message;
    }

})