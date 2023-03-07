
function checkInputs(){
    clearInputClasses();
    checkRequiredFields();
    checkPasswordMatch();
}

function clearInputClasses(){
    const inputItems = document.querySelectorAll('input');

    inputItems.forEach((input) => {
        input.className = '';
    });    
}

function checkRequiredFields() {
    const inputItems = document.querySelectorAll('input');

    inputItems.forEach((input) => {
        if (!input.value.length){
            input.classList.add('error-required', 'error');
        }
    });

}

function checkPasswordMatch(){
    // This function assumes that the classLists are emptied before evaluation
    const password = document.querySelector('#password');
    const passwordRepeat = document.querySelector('#passwordRepeat');

    if (!(password.classList.contains('error-required') 
        || passwordRepeat.classList.contains('error-required'))){
            if (password.value !== passwordRepeat.value){
                passwordRepeat.classList.add('error-mismatch', 'error');
            }   
    }
}

const buttonSubmit = document.querySelector('#btn-submit-form');

buttonSubmit.addEventListener('click', () => {
    checkInputs();
});
