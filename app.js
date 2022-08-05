let id = (id) => document.getElementById(id);

const form = id('form');
const firstName = id('Firstname');
const lastName = id('Lastname');
const email = id('email');
const password = id('password');
const errorElement = id('error');
const formControl = document.querySelector('.form-control')
const errorMsg = document.querySelectorAll('.error-icon')
const firstNameError = document.querySelector(".firstNameError")
const lastNameError = document.querySelector(".lastNameError")
const emailError = document.querySelector(".emailError")
const passwordError = document.querySelector(".passwordError")
const inputs = document.querySelectorAll('input')

console.log(form)
console.log(firstName)
console.log(lastName)
console.log(email)
console.log(password)
console.log(errorElement)


let messages = [];
form.addEventListener('submit', (e)=> {
    e.preventDefault()


    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    inputs.forEach((input) => {
        if(input.value === ''){
            input.style.borderColor = 'hsl(0, 100%, 74%)'; 
        }else{
            input.style.borderColor = '';
        }
    })

    for(i=0; i < errorMsg.length; i++){
        if(formControl.value === ''){
            errorMsg[i].style.display = 'none'; 
        }else{
            errorMsg[i].style.display = 'block';
        }  
    }


if (firstName.value === ''){
    firstNameError.innerText = "FirstName cannot be empty";
}else{
    firstNameError.innerText = "";
}
if (firstName.value === ''){
    firstNameError.innerText = "FirstName cannot be empty"; 
}else{
    firstNameError.innerText = "";
}
if (lastName.value === ''){
    lastNameError.innerText = "LastName cannot be empty";
}else{
    lastNameError.innerText = "";
}
if (email.value === '' || !email.value.match(pattern)){
    emailError.innerText = "Looks like this is not an email";
}else{
    emailError.innerText = "";
}
if (firstName.value === ''){
    passwordError.innerText = "Password cannot be empty";
}else{
    passwordError.innerText = "";
}

console.log(messages)
})
