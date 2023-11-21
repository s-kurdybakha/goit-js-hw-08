import throttle from "lodash.throttle";

const refs = {
    feedbackForm: document.querySelector('.js-feedback-form'),
    emailInput: document.querySelector('input'),
    messageInput: document.querySelector('textarea')
}


refs.feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({email: refs.emailInput.value, message: refs.messageInput.value});
    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset();
    
})

refs.feedbackForm.addEventListener('input', throttle(onForm, 500));

function onForm() {

    const formData = {
        email: refs.feedbackForm.elements.email.value,
        message: refs.feedbackForm.elements.message.value,
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
   
}

function getCurrentValuesOnForm() {
    const localStorageData = localStorage.getItem("feedback-form-state")

    if (localStorageData) {
        const data = JSON.parse(localStorageData)

        refs.emailInput.value = data.email;
        refs.messageInput.value = data.message;
    }
}

getCurrentValuesOnForm()